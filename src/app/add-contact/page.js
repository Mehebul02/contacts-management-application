"use client";


// const image_hosting_key = process.env.VITE_IMAGE_API_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ContactPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const contactDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      img_url: event.target.img_url.value,
    };
    console.log(contactDetails);
    
  };
  
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-3xl font-montserrat font-bold mb-6 text-center">
            Add Contact
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block  text-gray-700 font-montserrat font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" block text-gray-700 font-montserrat font-medium">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-montserrat font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-montserrat font-medium">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-montserrat font-medium">
                Profile Picture
              </label>
              {/* <input
              type="file"
              name="image"
             
              className="w-full p-2 border border-gray-300 rounded mt-1"
              accept="image/*"
            /> */}
              <input
                type="url"
                name="img_url"
                className="w-full p-3 border border-gray-300 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                placeholder=" URL"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
