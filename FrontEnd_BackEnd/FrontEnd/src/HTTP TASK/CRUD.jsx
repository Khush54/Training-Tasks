import React from 'react'
import { Context } from './Context'
import { useState, useEffect } from 'react';
import axios from 'axios'
function CRUD({ children }) {
    const API_URL = "http://localhost:5000/api/user";
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({ name: '', age: '', role: '' });
    const [newRole, setNewRole] = useState('');

    // TASK 1: Fetch user data (GET)
    const fetchUser = async () => {
        try {
            const res = await axios.get(API_URL);
            setUser(res.data);
        } catch (err) {
            console.error("Error fetching user", err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    // TASK 2: Create profile (POST)
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL, formData);
            alert(res.data.message);
            setUser(res.data.user);
        } catch (err) {
            alert("Signup failed");
        }
    };

    // TASK 3: Update specific field (PATCH)[cite: 1]
    const handlePatch = async () => {
        try {
            const res = await axios.patch(API_URL, { role: newRole });
            alert(res.data.message);
            setUser(res.data.user);
        } catch (err) {
            alert("Update failed");
        }
    };

    // TASK 4: Remove user (DELETE)[cite: 1]
    const handleDelete = async () => {
        if (!window.confirm("Are you sure? This is permanent!")) return;
        try {
            const res = await axios.delete(API_URL);
            alert(res.data.message);
            setUser(null);
        } catch (err) {
            alert("Delete failed");
        }
    };

    const value = { user, formData, setNewRole, setFormData, fetchUser, handleCreate, handlePatch, handleDelete }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default CRUD