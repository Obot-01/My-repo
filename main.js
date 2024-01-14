let loggedInUser = null;

// Event listeners
document.getElementById('dashboard').addEventListener('click', showDashboard);
document.getElementById('records').addEventListener('click', showRecords);
document.getElementById('logout').addEventListener('click', logout);

// Check if the user is logged in on page load
window.addEventListener('DOMContentLoaded', () => {
  checkLoginStatus();
});

// Check if the user is logged in
function checkLoginStatus() {
  if (loggedInUser) {
    showDashboard();
  } else {
    // Redirect to login page or show a login form
    console.log('User not logged in. Redirect to login page.');
  }
}

// Show the dashboard page
function showDashboard() {
  clearContent();
  const content = document.getElementById('content');
  const dashboardDiv = document.createElement('div');
  dashboardDiv.innerHTML = '<h2>Welcome to the Dashboard!</h2><p>This is where you can access various features and information.</p>';
  content.appendChild(dashboardDiv);
}

// Show the records page
function showRecords() {
  if (loggedInUser && loggedInUser.role === 'admin') {
    clearContent();
    const content = document.getElementById('content');
    const recordsDiv = document.createElement('div');
    recordsDiv.innerHTML = '<h2>View Records</h2><p>Here you can view and manage citizen records.</p>';
    content.appendChild(recordsDiv);
  } else {
    console.log('Access denied. User does not have sufficient privileges.');
  }
}

// Logout the user
function logout() {
  loggedInUser = null;
  // Redirect to the login page or perform any necessary logout actions
  console.log('User logged out. Redirect to login page.');
}

// Clear the content area
function clearContent() {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.firstChild.remove();
  }
}
