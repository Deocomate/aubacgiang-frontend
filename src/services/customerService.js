const API_BASE_URL = process.env.API_BASE_URL;

export async function registerCustomer(customerData) {
  try {
    const response = await fetch(`${API_BASE_URL}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register customer");
    }

    return await response.json();
  } catch (error) {
    console.error("Error registering customer:", error);
    throw error;
  }
}
