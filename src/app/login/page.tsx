export default function LoginPage() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2" />
        <button className="bg-blue-500 text-white px-4 py-2">Send PIN</button>
      </form>
    </main>
  );
}
