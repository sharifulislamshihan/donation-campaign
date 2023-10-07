import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (

        <div className=" my-80 ">
            <h1 className="flex justify-center text-5xl font-semibold ">Ooppss</h1>
            <Link className="flex justify-center my-5 text-lg underline hover:text-blue-500" to="/">Go Back To Home</Link>
        </div>

    );
};

export default ErrorPage;