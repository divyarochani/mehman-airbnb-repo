import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { bookingDataContext } from '../Context/BookingContext'

function CancelBooking() {
    const { id } = useParams()
    const { cancelBooking } = useContext(bookingDataContext)
    const navigate = useNavigate()
    const [reason, setReason] = useState('')

    const handleCancel = () => {
        if (!reason) {
            alert("Please select a reason!")
            return
        }

        cancelBooking(id, reason)
        navigate("/bookings") // Redirect to bookings or home
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className='w-[90%] max-w-[500px] bg-white p-6 rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Cancel Booking</h1>
                <p className='text-gray-600 mb-3'>Please select a reason for cancellation:</p>
                <select
                    className='w-full p-3 border rounded mb-5'
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                >
                    <option value="">-- Select Reason --</option>
                    <option value="Plans changed">Plans changed</option>
                    <option value="Found a better place">Found a better place</option>
                    <option value="Too expensive">Too expensive</option>
                    <option value="Just exploring">Just exploring</option>
                    <option value="Other">Other</option>
                </select>

                <button
                    className='w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded'
                    onClick={handleCancel}
                >
                    Cancel Booking
                </button>
            </div>
        </div>
    )
}

export default CancelBooking
