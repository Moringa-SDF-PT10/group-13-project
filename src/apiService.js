const API_URL = 'https://group-13-project-1.onrender.com';

async function fetchAPI(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, options);
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}

export async function setBudget(amount) {
  return fetchAPI('/budget', 'POST', { amount });
}

export async function getBudget() {
  return fetchAPI('/budget');
}

export async function getExpenses() {
  return fetchAPI('/expenses');
}

export async function addExpense(expense) {
  return fetchAPI('/expenses', 'POST', expense);
}

export async function updateExpense(id, updatedExpense) {
  return fetchAPI(`/expenses/${id}`, 'PUT', updatedExpense);
}

export async function deleteExpense(id) {
  return fetchAPI(`/expenses/${id}`, 'DELETE');
}