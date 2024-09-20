import logo from './logo.svg';
import './App.css';
import{Link,Route,Routes} from 'react-router-dom';
import AdminHome from './components/AdminHomeComponent';
import LoginComponent from './components/LoginComponent';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import CarouselComponent from './components/CarouselComponent';
import HomeComponent from './components/HomeComponent';
import AdminHomeComponent from './components/AdminHomeComponent';
import LogoutComponent from './components/LogoutComponent';
import UserRegComponent from './components/UserRegComponent';
import AddTrekComponent from './components/AddTrekComponent';
import GuideRegComponent from './components/GuideRegComponent';
import GuideHomeComponent from './components/GuideHomeComponent';
import GuidesListComponent from './components/GuidesListComponent';
import PlanTrekComponent from './components/PlanTrekComponent';
import AssignedTreksComponent from './components/AssignedTreksComponent';
import GuideProfileComponent from './components/GuideProfileComponent';
import UpdateProfileComponent from './components/UpdateProfileComponent';
import BookTrekComponent from './components/BookTrekComponent';
import TrekkerHomeComponent from './components/TrekkerHomeComponent';
import TrekkerProfileComponent from './components/TrekkerProfileComponent'
import GuideProfileUpdateComponent from './components/GuideProfileUpdateComponent';
import PaymentComponent from './components/PaymentComponent';
import GetBookingComponent from './components/GetBookingComponent';
import GetPaymentComponent from './components/GetPaymentComponent';




function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    {/* <NavbarComponent/> */}
     {/* <FooterComponent/> */}
     {/* <CarouselComponent/> */}
     {/* <HomeComponent/> */}
      {/* <AdminHomeComponent/> */}
      
      {/* <UserRegComponent/> */}
      {/* <AddTrekComponent/> */}

       {/* <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/admin_home" element={<AdminHome/>}></Route>
        <Route path="/login" element={<LoginComponent/>}></Route>
      </Routes> */}

      {/* <GuideHomeComponent/> */}
      {/* <TrekkerHomeComponent/> */}
      {/* <GuidesListComponent/> */}
      {/* <PlanTrekComponent/>  */}
      {/* <BookTourComponent/> */}
  {/* <AssignedTreksComponent/> */}
  {/* <NavBarTrekComponent/> */}
  {/* <TrekkerHomeComponent/> */}

      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/login" element={<LoginComponent/>}></Route>
        <Route path="registration" element={<UserRegComponent/>}></Route>
      </Routes>

      <Routes>
      <Route path="/admin_home" element={<AdminHomeComponent/>}>
                <Route path="addtrek" element={<AddTrekComponent/>}></Route>
                <Route path="guidereg" element={<GuideRegComponent/>}></Route>
                <Route path="plantrek" element={<PlanTrekComponent/>}></Route>
                <Route path="guidelist" element={<GuidesListComponent/>}></Route>
                 <Route path="logout" element={<LogoutComponent/>}></Route>
                 <Route path="bookreport" element={<GetBookingComponent/>}></Route>
                 <Route path="paymentreport" element={<GetPaymentComponent/>}></Route>
      </Route>
      </Routes>

      <Routes>
      <Route path="/guide_home" element={<GuideHomeComponent/>}>
                 <Route path="logout" element={<LogoutComponent/>}></Route>
                 <Route path="guideprofile" element={<GuideProfileComponent/>}></Route>
                 <Route path="assignedtreks" element={<AssignedTreksComponent/>}></Route>
                 <Route path="updateguideprofile" element={<GuideProfileUpdateComponent/>}></Route>
      </Route>
      </Routes> 

      <Routes>
      <Route path="/trekker_home" element={<TrekkerHomeComponent/>}>
                  <Route path='trekkerprofile' element={<TrekkerProfileComponent/>}></Route>
      </Route>
      </Routes> 

        <Routes>
        <Route path="/logout" element={<LogoutComponent/>}></Route>
        </Routes>

        <Routes>
        <Route path="/updatetrekkerprofile" element={<UpdateProfileComponent/>}></Route>
        </Routes>

        <Routes>
        <Route path="/trekkerprofile" element={<TrekkerProfileComponent/>}></Route>
        </Routes>

      <Routes>
        <Route path='/trekbook' element={<BookTrekComponent/>}></Route>
      </Routes>

      <Routes>
        <Route path='/pay' element={<PaymentComponent/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
