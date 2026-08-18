"use client";

import React, { useState, useEffect } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, parseISO, startOfDay, addMinutes, isAfter, isBefore } from "date-fns";
import { vi } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, Plus, Trash2, Edit2, CheckCircle2, User, Phone, XCircle, Loader2 } from "lucide-react";

// Types
type AppointmentStatus = "BOOKED" | "DONE" | "CANCELLED";

interface Appointment {
  id: string;
  date: string; // ISO string YYYY-MM-DD
  time: string; // HH:mm
  name: string;
  phone: string;
  status: AppointmentStatus;
}

export default function AppointmentPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"MONTH" | "DAY">("MONTH");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAppointments(data);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "09:00",
    status: "BOOKED" as AppointmentStatus
  });

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8; // 8:00 to 19:30
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  }).filter((_, i) => i < 24); // 8:00 AM to 7:30 PM

  // --- Handlers ---
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextDay = () => setSelectedDate(addDays(selectedDate, 1));
  const prevDay = () => setSelectedDate(addDays(selectedDate, -1));

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
    setViewMode("DAY");
  };

  const openAddModal = (time?: string) => {
    setEditingAppointment(null);
    setFormData({
      name: "",
      phone: "",
      time: time || "09:00",
      status: "BOOKED"
    });
    setIsModalOpen(true);
  };

  const openEditModal = (app: Appointment) => {
    setEditingAppointment(app);
    setFormData({
      name: app.name,
      phone: app.phone,
      time: app.time,
      status: app.status
    });
    setIsModalOpen(true);
  };

  // --- Sync ---
  const syncToGoogleSheets = async (action: 'add' | 'update' | 'delete', appointment: Appointment) => {
    try {
      fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, appointment })
      }).catch(err => console.error("API error", err));
    } catch (error) {
      console.error('Failed to sync', error);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc muốn xoá lịch này không?")) {
      const appToDelete = appointments.find(a => a.id === id);
      setAppointments(appointments.filter(a => a.id !== id));
      if (appToDelete) {
        syncToGoogleSheets('delete', appToDelete);
      }
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.phone || !formData.time) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (editingAppointment) {
      const updatedApp = {
        ...editingAppointment,
        ...formData,
        date: format(selectedDate, "yyyy-MM-dd")
      };
      setAppointments(appointments.map(a => a.id === editingAppointment.id ? updatedApp : a));
      syncToGoogleSheets('update', updatedApp);
    } else {
      const newApp = {
        id: Math.random().toString(36).substr(2, 9),
        date: format(selectedDate, "yyyy-MM-dd"),
        ...formData
      };
      setAppointments([...appointments, newApp]);
      syncToGoogleSheets('add', newApp);
    }
    setIsModalOpen(false);
  };

  const getAppointmentsForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return appointments.filter(a => a.date === dateStr);
  };

  const getAppointmentsForTimeSlot = (date: Date, time: string) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return appointments.filter(a => a.date === dateStr && a.time === time);
  };

  // --- Renderers ---
  const renderHeader = () => {
    const isMonthView = viewMode === "MONTH";
    const title = isMonthView 
      ? format(currentDate, "MMMM yyyy", { locale: vi })
      : format(selectedDate, "EEEE, dd/MM/yyyy", { locale: vi });

    return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-2xl shadow-sm border border-[#ff6115]/10">
        <div className="flex items-center justify-between w-full md:w-auto gap-2 md:gap-4">
          <button 
            onClick={isMonthView ? prevMonth : prevDay}
            className="p-2 hover:bg-[#fffcf4] rounded-full text-[#ff6115] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg md:text-xl font-semibold capitalize text-gray-800 md:min-w-[200px] text-center flex-1">
            {title}
          </h2>
          <button 
            onClick={isMonthView ? nextMonth : nextDay}
            className="p-2 hover:bg-[#fffcf4] rounded-full text-[#ff6115] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-3">
          <div className="flex bg-[#fffcf4] p-1 rounded-lg border border-[#ff6115]/20 w-full md:w-auto">
            <button
              onClick={() => setViewMode("MONTH")}
              className={`flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === "MONTH" 
                  ? "bg-[#ff6115] text-white shadow-sm" 
                  : "text-gray-600 hover:text-[#ff6115]"
              }`}
            >
              Tháng
            </button>
            <button
              onClick={() => {
                setViewMode("DAY");
                setSelectedDate(new Date());
              }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === "DAY" 
                  ? "bg-[#ff6115] text-white shadow-sm" 
                  : "text-gray-600 hover:text-[#ff6115]"
              }`}
            >
              Ngày
            </button>
          </div>
          
          <button 
            onClick={() => openAddModal()}
            className="flex items-center justify-center gap-2 bg-[#ff6115] hover:bg-[#e55610] text-white px-4 py-2.5 rounded-lg font-medium transition-colors shadow-sm whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Thêm lịch</span>
            <span className="sm:hidden">Thêm</span>
          </button>
        </div>
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    // Header days
    const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    const headerRow = (
      <div className="grid grid-cols-7 mb-2" key="header">
        {weekDays.map((wd, i) => (
          <div key={i} className="text-center font-semibold text-gray-500 py-2 text-sm">
            {wd}
          </div>
        ))}
      </div>
    );

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const dayAppointments = getAppointmentsForDate(cloneDay);
        
        days.push(
          <div
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
            className={`min-h-[120px] p-2 border-r border-b border-gray-100 transition-colors cursor-pointer hover:bg-[#fffcf4] relative ${
              !isSameMonth(day, monthStart)
                ? "bg-gray-50/50 text-gray-400"
                : isSameDay(day, new Date())
                ? "bg-[#fffcf4] text-[#ff6115] font-semibold"
                : "bg-white text-gray-700"
            }`}
          >
            <div className="flex justify-between items-start">
              <span className={`flex items-center justify-center w-7 h-7 rounded-full ${
                isSameDay(day, new Date()) ? "bg-[#ff6115] text-white" : ""
              }`}>
                {formattedDate}
              </span>
              {dayAppointments.length > 0 && (
                <span className="text-xs bg-[#ff6115]/10 text-[#ff6115] px-2 py-0.5 rounded-full font-medium">
                  {dayAppointments.length} lịch
                </span>
              )}
            </div>
            
            <div className="mt-2 space-y-1">
              {dayAppointments.slice(0, 3).map(app => (
                <div 
                  key={app.id} 
                  className={`text-[10px] md:text-xs px-1 md:px-2 py-1 rounded truncate border ${
                    app.status === "DONE" 
                      ? "bg-gray-50 border-gray-200 text-gray-500 line-through" 
                      : app.status === "CANCELLED"
                      ? "bg-red-50 border-red-200 text-red-500 line-through"
                      : "bg-white border-[#ff6115]/30 text-gray-800 shadow-sm"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditModal(app);
                  }}
                >
                  <span className="font-semibold text-[#ff6115] mr-1">{app.time}</span>
                  {app.name}
                </div>
              ))}
              {dayAppointments.length > 3 && (
                <div className="text-xs text-gray-400 pl-1">
                  + {dayAppointments.length - 3} lịch khác
                </div>
              )}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 border-l border-t border-gray-100" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }

    return (
      <div className="bg-white rounded-2xl shadow-sm border border-[#ff6115]/10 overflow-x-auto">
        <div className="min-w-[768px]">
          {headerRow}
          {rows}
        </div>
      </div>
    );
  };

  const renderDayView = () => {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-[#ff6115]/10 overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-gray-100">
          {timeSlots.map(time => {
            const apps = getAppointmentsForTimeSlot(selectedDate, time);
            
            return (
              <div key={time} className="flex flex-col sm:flex-row min-h-[80px] group hover:bg-[#fffcf4] transition-colors">
                <div className="w-full sm:w-24 p-2 sm:p-4 border-b sm:border-b-0 sm:border-r border-gray-100 flex items-center sm:items-start justify-between sm:justify-center bg-gray-50 sm:bg-transparent">
                  <span className="text-sm font-medium text-gray-500">{time}</span>
                  <button 
                    onClick={() => openAddModal(time)}
                    className="sm:hidden flex items-center gap-1 text-xs font-medium text-[#ff6115] bg-[#ff6115]/10 px-2 py-1.5 rounded-lg"
                  >
                    <Plus className="w-3 h-3" />
                    Thêm lịch
                  </button>
                </div>
                <div className="flex-1 p-3 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {apps.map(app => (
                      <div 
                        key={app.id} 
                        className={`p-3 rounded-xl border flex flex-col gap-2 relative ${
                          app.status === "DONE"
                            ? "bg-gray-50 border-gray-200 opacity-70"
                            : app.status === "CANCELLED"
                            ? "bg-red-50 border-red-200 opacity-70"
                            : "bg-white border-[#ff6115]/30 shadow-sm hover:shadow-md transition-shadow"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2 font-medium text-gray-800">
                            <User className={`w-4 h-4 ${app.status === "CANCELLED" ? "text-red-400" : "text-[#ff6115]"}`} />
                            <span className={app.status === "DONE" || app.status === "CANCELLED" ? "line-through text-gray-500" : ""}>
                              {app.name}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <button 
                              onClick={() => openEditModal(app)}
                              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              onClick={() => handleDelete(app.id)}
                              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-3.5 h-3.5" />
                          {app.phone}
                        </div>
                        
                        <div className="mt-1 flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            app.status === "DONE" 
                              ? "bg-green-100 text-green-700" 
                              : app.status === "CANCELLED"
                              ? "bg-red-100 text-red-700"
                              : "bg-orange-100 text-orange-700"
                          }`}>
                            {app.status === "DONE" ? "Đã làm" : app.status === "CANCELLED" ? "Đã huỷ" : "Khách đặt lịch"}
                          </span>
                          
                          {app.status === "BOOKED" && (
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => {
                                  const updatedApp = { ...app, status: "CANCELLED" as AppointmentStatus };
                                  setAppointments(appointments.map(a => 
                                    a.id === app.id ? updatedApp : a
                                  ));
                                  syncToGoogleSheets('update', updatedApp);
                                }}
                                className="text-xs flex items-center gap-1 text-red-500 hover:text-red-700 font-medium"
                              >
                                <XCircle className="w-3.5 h-3.5" />
                                Khách huỷ
                              </button>
                              <button 
                                onClick={() => {
                                  const updatedApp = { ...app, status: "DONE" as AppointmentStatus };
                                  setAppointments(appointments.map(a => 
                                    a.id === app.id ? updatedApp : a
                                  ));
                                  syncToGoogleSheets('update', updatedApp);
                                }}
                                className="text-xs flex items-center gap-1 text-[#ff6115] hover:text-[#e55610] font-medium"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Đánh dấu đã làm
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Add button appears on hover (desktop only) */}
                  <button 
                    onClick={() => openAddModal(time)}
                    className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity items-center gap-1 text-sm font-medium text-[#ff6115] hover:bg-[#ff6115]/10 px-3 py-1.5 rounded-lg"
                  >
                    <Plus className="w-4 h-4" />
                    Thêm
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fffcf4] p-2 sm:p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2 md:gap-3">
            <CalendarIcon className="w-6 h-6 md:w-8 md:h-8 text-[#ff6115]" />
            Quản lý lịch hẹn KTV
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-2">Theo dõi và quản lý lịch khách đặt, lịch làm việc của Kỹ thuật viên</p>
        </div>

        {renderHeader()}
        
        {viewMode === "MONTH" ? renderCells() : renderDayView()}

        {/* Modal Thêm/Sửa Lịch */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
              <div className="px-4 md:px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-[#fffcf4] shrink-0">
                <h3 className="text-lg font-semibold text-gray-800">
                  {editingAppointment ? "Sửa lịch hẹn" : "Thêm lịch hẹn mới"}
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  &times;
                </button>
              </div>
              
              <div className="p-4 md:p-6 space-y-4 overflow-y-auto">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Ngày hẹn</label>
                  <div className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 font-medium">
                    {format(selectedDate, "dd/MM/yyyy")}
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Khung giờ</label>
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6115]/50 focus:border-[#ff6115] transition-all bg-white"
                  >
                    {timeSlots.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Tên khách hàng <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6115]/50 focus:border-[#ff6115] transition-all"
                    placeholder="VD: Nguyễn Văn A"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Số điện thoại <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6115]/50 focus:border-[#ff6115] transition-all"
                    placeholder="VD: 0901234567"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value as AppointmentStatus})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6115]/50 focus:border-[#ff6115] transition-all bg-white"
                  >
                    <option value="BOOKED">Khách đặt lịch</option>
                    <option value="DONE">Đã làm</option>
                    <option value="CANCELLED">Đã huỷ</option>
                  </select>
                </div>
              </div>
              
              <div className="px-4 md:px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50 shrink-0">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Hủy
                </button>
                <button 
                  onClick={handleSave}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#ff6115] rounded-lg hover:bg-[#e55610] shadow-sm transition-colors"
                >
                  {editingAppointment ? "Cập nhật" : "Lưu lịch hẹn"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
