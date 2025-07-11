import { Button } from '../components/App/Button';
import { UserList } from '../components/App/UserList';
import TextComponent from '../components/App/TextComponent';
import { TaskList } from '../components/App/TaskList';
// import programmer from '../assets/programmer.jpg';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <Button />
      <UserList />
      <TextComponent />
      <TaskList />
      {/* <img src={programmer} alt="Програмист" />
      <img src="images/laptop.jpg" alt="" /> */}
    </div>
  );
}

export default HomePage;