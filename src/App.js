export default function App() {
const name = 'Rajaa';
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

  const myContainer = (
  
    <>
  <h2>Dear Stephen</h2>
<br/>
<p>Hi, my name is {name}, and I would like to introduce myself to you. I am applying for the position of React developer.</p>
<br/>
<p>I’ve attached my CV to this email.</p>
<p>You can find details of my previous roles, experience, and achievements.</p>
<p>I’m particularly proud of :</p>
<ul id = 'my-achievements'>
    <li className = 'ln-achievement'>achievement 1</li>
    <li className = 'ln-achievement'>achievement 2</li>
    <li className = 'ln-achievement'>achievement 3</li>
</ul>
<p>I’m excited about this opportunity and would love to know more about the process, including timelines for you to decide on interviews.</p>
<br/>
<span>Best regards,</span>
<span>React</span>
<br/>
<b>{day}/{month}/{year}</b>
<br></br>
<b>{name}</b>
  </>
  );
  
  return myContainer;
}