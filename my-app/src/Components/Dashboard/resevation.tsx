import React, { useState, useMemo } from 'react';


interface Reservation {
  id: number;
  customerName: string;
  date: string;
  time: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'No-Show';
}



const dummyReservations: Reservation[] = [
  { id: 1, customerName: 'Ahmed', date: '2023-10-15', time: '14:00', status: 'Pending' },
  { id: 2, customerName: 'khaled', date: '2023-10-16', time: '18:30', status: 'Confirmed' },
  { id: 3, customerName: 'john', date: '2023-10-17', time: '12:00', status: 'Cancelled' },
 
];

const ReservationAdminPanel: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>(dummyReservations);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

 
  const filteredReservations = useMemo(() => {
    return reservations.filter((res) => {
      const matchesSearch = res.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            res.date.includes(searchTerm) ||
                            res.time.includes(searchTerm);
      const matchesStatus = statusFilter === 'All' || res.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [reservations, searchTerm, statusFilter]);

  // Update reservation 
  const updateStatus = (id: number, newStatus: Reservation['status']) => {
    setReservations((prev) =>
      prev.map((res) => (res.id === id ? { ...res, status: newStatus } : res))
    );
  };

  //  confirm/cancel actions
  const handleAction = (id: number, action: 'Confirm' | 'Cancel') => {
    const newStatus = action === 'Confirm' ? 'Confirmed' : 'Cancelled';
    updateStatus(id, newStatus);
  };

  return (
    <div className="reservations-list" role="region" aria-labelledby="reservations-title">
      <h2 id="reservations-title">Reservation Admin Panel</h2>
      
      {/* Search and Filter Bar */}
      <div className="reservations-search">
        <input
          type="text"
          placeholder="Search by name, date, or time..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search reservations"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          aria-label="Filter by status"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="No-Show">No-Show</option>
        </select>
      </div>
      
      {/* Reservations Table */}
      <table className="reservations-table" role="table" aria-label="Reservations table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredReservations.length > 0 ? (
            filteredReservations.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.customerName}</td>
                <td>{res.date}</td>
                <td>{res.time}</td>
                <td>
                  <select
                    className={`status-${res.status.toLowerCase()}`}
                    value={res.status}
                    onChange={(e) => updateStatus(res.id, e.target.value as Reservation['status'])}
                    aria-label={`Status for reservation ${res.id}`}
                  >
                    <option value="Pending" data-icon="">Pending</option>
                    <option value="Confirmed" data-icon="">Confirmed</option>
                    <option value="Cancelled" data-icon="">Cancelled</option>
                  </select>
                </td>
                <td>
                  <button
                    className="confirm-btn"
                    onClick={() => handleAction(res.id, 'Confirm')}
                    disabled={res.status === 'Confirmed'}
                    aria-label={`Confirm reservation ${res.id}`}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleAction(res.id, 'Cancel')}
                    disabled={res.status === 'Cancelled'}
                    aria-label={`Cancel reservation ${res.id}`}
                  >
                    Cancel
                  </button>
                
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: '40px' }}>
                No reservations found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationAdminPanel;
