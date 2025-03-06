import { useState } from "react";

function App() {
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    Address: "",
    zipCode: "",
    IsVisible: true,
    notification: "",
  });
  function handlechange(event) {
    const { name, value, type, checked } = event.target;
    setformdata((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formdata);
  }
  return (
    <div className="border-10 rounded-lg p-8">
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={submitHandler}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handlechange}
                  type="text"
                  placeholder="first-name"
                  name="firstName"
                  value={formdata.firstName}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handlechange}
                  type="text"
                  placeholder="last-name"
                  name="lastName"
                  value={formdata.lastName}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="Email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handlechange}
                  type="text"
                  placeholder="email"
                  name="email"
                  value={formdata.email}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <input
                  className=" w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handlechange}
                  type="text"
                  placeholder="country"
                  name="country"
                  value={formdata.country}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="Address"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handlechange}
                  type="text"
                  placeholder="Address"
                  name="Address"
                  value={formdata.Address}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm/6 font-medium text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handlechange}
                  type="text"
                  placeholder="city"
                  name="city"
                  value={formdata.city}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="zipCode"
                className="block text-sm/6 font-medium text-gray-900"
              >
                zipCode
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handlechange}
                  type="text"
                  placeholder="zipCode"
                  name="zipCode"
                  value={formdata.zipCode}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 space-y-10">
            <div>
              <h2>By Email</h2>
              <input
                onChange={handlechange}
                type="checkbox"
                name="IsVisible"
                id="IsVisible"
                value={formdata.IsVisible}
              />
              <label className="ml-3 text-base/7 font-semibold text-gray-900">
                Comments<br></br>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Get notified when someones posts a comment on a posting.
                </p>
              </label>
            </div>
            <div>
              <input
                onChange={handlechange}
                type="checkbox"
                name="IsVisible"
                id="IsVisible"
                value={formdata.IsVisible}
              />
              <label className="ml-3 text-base/7 font-semibold text-gray-900">
                Candidates<br></br>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Get notified when a candidate applies for a job.
                </p>
              </label>
            </div>

            <div>
              <input
                onChange={handlechange}
                type="checkbox"
                name="IsVisible"
                id="IsVisible"
                value={formdata.IsVisible}
              />
              <label className="ml-3 text-base/7 font-semibold text-gray-900">
                Offer<br></br>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </label>
            </div>
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm/6 font-semibold text-gray-900">
              Push notification:
            </legend>
            <p className="mt-1 text-sm/6 text-gray-600">
              These are delivered via SMS to your mobile phone
            </p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  type="radio"
                  onChange={handlechange}
                  name="notification"
                  value="Everything"
                  id="Everything"
                  checked={formdata.notification === "Everything"}
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  htmlFor="Everything"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Everything
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  type="radio"
                  onChange={handlechange}
                  name="notification"
                  value="Same as email"
                  id="Same as email"
                  checked={formdata.notification === "Same as email"}
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  htmlFor="Same as email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Same as email
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  type="radio"
                  onChange={handlechange}
                  name="notification"
                  value="No push notification"
                  id="No push notification"
                  checked={formdata.notification === "No push notification"}
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  htmlFor="No push notification"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  No push notification
                </label>
              </div>
            </div>
          </fieldset>
          <button className="mt-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
