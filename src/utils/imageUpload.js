export const handleFileChange = (event) => {
  return new Promise((resolve, reject) => {
    const file = event.target.files[0];
    if (!file) {
      return reject('No file selected');
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result; // Base64 string
     return resolve(base64); // Resolve the promise with the base64 string
    };

    reader.onerror = (error) => {
      reject(error); // Reject the promise if there's an error
    };

    reader.readAsDataURL(file); // Start reading the file
  });
};
