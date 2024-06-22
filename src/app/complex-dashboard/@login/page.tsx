import Card from "@/components/card";

export default function Login() {
  return (
    <Card>
      <div className="text-center">
        <div className="alert text-red-500">
          Please login to access the dashboard!
        </div>
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="flex flex-col">
          <label className="flex flex-col text-left">
            Username:
            <input
              type="text"
              name="username"
              className="border border-gray-300 p-1"
            />
          </label>
          <label className="flex flex-col text-left">
            Password:
            <input
              type="password"
              name="password"
              className="border border-gray-300 p-1"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 mt-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </Card>
  );
}
