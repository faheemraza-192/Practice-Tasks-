import Image from "next/image";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Form from "./Components/Form";
import Stopwatch from "./Components/Stopwatch";
import Task from "./Components/Task";
import Theme from "./Components/Theme";
import Showtext from "./Components/Showtext";

export default function Home() {
  return (
    <div>
      <Header />
      <hr />
      <Input />
      <hr />
      <Counter />
      <hr />
      <Form/>
      <hr />
      <Stopwatch/>
      <hr />
      <Task/>
      <hr />
      <Theme/>
      <hr />
      <Showtext/>
      <hr />
    </div>
  );
}
