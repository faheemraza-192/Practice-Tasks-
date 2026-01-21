import Image from "next/image";
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

export default function Home() {
  return (
    <div>
      <hr />
      <main>
      <Services />
      </main>
      <hr />
      <hr />
      <hr />
      <LoginpracticeForm />
      <hr />
      <hr />
      <hr />
      <Header />
      <hr />
      <hr />
      <Login />
      <hr />
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
