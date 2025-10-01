function showMessage() {
  async function showMessage() {
  try {
    const response = await fetch('https://storage.googleapis.com/your-bucket-name/message.txt');
    const message = await response.text();
    alert(message);
  } catch (error) {
    alert("Unable to fetch message from Google Cloud. Please try again later.");
  }
}
}