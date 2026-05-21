export default function ForgotPasswordPage() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Forgot Password
                </h1>

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border p-3 rounded-lg mb-4"
                />

                <button className="w-full bg-black text-white p-3 rounded-lg">
                    Send Reset Link
                </button>

            </div>

        </div>
    );
}