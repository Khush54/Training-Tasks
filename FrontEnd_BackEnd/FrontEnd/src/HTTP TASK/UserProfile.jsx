import './UserProfile.css'
import { useContext } from 'react';
import { Context } from './Context';

function UserProfile() {
  const { user, formData, setFormData, setNewRole, fetchUser, handleCreate, handlePatch, handleDelete } = useContext(Context);
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='title'>User Dashboard</h1>
        <p className='subtitle'>Manage your profile with real-time API updates</p>
      </header>

      <div className='grid'>
        {/* TASK 1: VIEW SECTION */}
        <section className='card'>
          <h3 className='cardTitle'>👤 Profile Details (GET)</h3>
          {user ? (
            <div className='details'>
              <div className='detailItem'><strong>Name:</strong> <span>{user.name}</span></div>
              <div className='detailItem'><strong>Age:</strong> <span>{user.age}</span></div>
              <div className='detailItem'><strong>Role:</strong> <span className='badge'>{user.role}</span></div>
            </div>
          ) : (
            <p className='noData'>No active profile found.</p>
          )}
          <button className='refreshBtn' onClick={fetchUser}>Refresh Data</button>
        </section>

        {/* TASK 2: CREATE SECTION */}
        <section className='card'>
          <h3 className='cardTitle'>➕ New User (POST)</h3>
          <form onSubmit={handleCreate} className='form'>
            <input
              className='input'
              placeholder="Full Name"
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              className='input'
              type="number"
              placeholder="Age"
              onChange={e => setFormData({ ...formData, age: e.target.value })}
            />
            <input
              className='input'
              placeholder="Role (e.g. Developer)"
              onChange={e => setFormData({ ...formData, role: e.target.value })}
            />
            <button type="submit" className='primaryBtn'>Create Account</button>
          </form>
        </section>

        {/* TASK 4: UPDATE SECTION */}
        <section className='card'>
          <h3 className='cardTitle'>✏️ Update Role (PATCH)</h3>
          <div className='patchGroup'>
            <input
              className='input'
              placeholder="Enter new role..."
              onChange={e => setNewRole(e.target.value)}
            />
            <button onClick={handlePatch} className='secondaryBtn'>Update Field</button>
          </div>
        </section>

        {/* TASK 5: DELETE SECTION */}
        <section className='card' style={{ borderTop: '4px solid #ef4444' }}>
          <h3 className='cardTitle' style={{ color: '#ef4444' }}>⚠️ Danger Zone</h3>
          <p className='deleteText'>Once you delete your account, there is no going back.</p>
          <button onClick={handleDelete} className='deleteBtn'>Delete Permanently</button>
        </section>
      </div>
    </div>
  );
}


export default UserProfile;