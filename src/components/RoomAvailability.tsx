
import React, { useState } from 'react';

interface RoomAvailabilityProps {
  roomType: {
    id: number;
    name: string;
    totalRooms: number;
  };
}

const RoomAvailability: React.FC<RoomAvailabilityProps> = ({ roomType }) => {
  // Mock room status data - in real app, this would come from backend
  const [roomStatus] = useState(() => {
    const status = [];
    for (let i = 1; i <= roomType.totalRooms; i++) {
      const randomStatus = Math.random();
      let roomState;
      if (randomStatus < 0.6) {
        roomState = 'available';
      } else if (randomStatus < 0.8) {
        roomState = 'booked';
      } else {
        roomState = 'maintenance';
      }
      
      status.push({
        roomNumber: `${roomType.name.charAt(0)}${i.toString().padStart(2, '0')}`,
        status: roomState
      });
    }
    return status;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500 hover:bg-green-600 border-green-600';
      case 'booked':
        return 'bg-red-500 cursor-not-allowed border-red-600';
      case 'maintenance':
        return 'bg-yellow-500 cursor-not-allowed border-yellow-600';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'booked':
        return 'Booked';
      case 'maintenance':
        return 'Maintenance';
      default:
        return 'Unknown';
    }
  };

  const availableCount = roomStatus.filter(room => room.status === 'available').length;
  const bookedCount = roomStatus.filter(room => room.status === 'booked').length;

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-gray-800">Room Availability</h4>
        <div className="text-sm text-gray-600">
          {availableCount} of {roomType.totalRooms} available
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-2 mb-4">
        {roomStatus.map((room, index) => (
          <div
            key={index}
            className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-white text-xs font-semibold transition-all duration-200 ${getStatusColor(room.status)}`}
            title={`Room ${room.roomNumber} - ${getStatusText(room.status)}`}
          >
            {room.roomNumber}
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span>Maintenance</span>
        </div>
      </div>
    </div>
  );
};

export default RoomAvailability;
