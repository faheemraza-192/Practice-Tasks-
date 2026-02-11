// Importing all UI components used on the home page
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Form from "./Components/Form";
import Stopwatch from "./Components/Stopwatch";
import Task from "./Components/Task";
import Theme from "./Components/Theme";
import Showtext from "./Components/Showtext";
import SimpleLogin from "./Components/SimpleLogin";
import Login from "./Components/Login";
import LoginpracticeForm from "./Components/LoginpracticeForm";
import Services from "./Components/Services";
import Redux from "./Components/Redux";

// Main page component for Next.js
export default function Home() {
  return (
    <div>
      <hr />

      {/* Main Section */}
      <main>
        <h1>Home Page</h1>

        {/* Redux Counter Component */}
        <Redux />
      </main>

      <hr />
      <Services />
      <hr />
      <LoginpracticeForm />
      <hr />
      <Header />
      <hr />
      <Login />
      <hr />
      <Input />
      <hr />
      <Counter />
      <hr />
      <Form />
      <hr />
      <Stopwatch />
      <hr />
      <Task />
      <hr />
      <Theme />
      <hr />
      <Showtext />
      <hr />
      <SimpleLogin />
    </div>
  );
}
