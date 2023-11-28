import React, { Component } from "react";
import { Services } from '../Services';
import { Features } from '../Services';
import ServiceList from "../components/ServiceList";
import Searchbox from "../components/Searchbox";
import ErrorBoundary from "../components/ErrorBoundary";
import Navigation from "../components/Navigation/Navigation";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Logo from "../components/Logo/Logo";
import "./App.css";
import Barberlogin from "../barbercomps/Barberlogin/Barberlogin";
import Barberregister from "../barbercomps/Barberregister/Barberregister";
import NavigationBP from "../components/Navigation/NavigationBP";
import NavigationCS from "../components/Navigation/NavigationCS";
import Shops from "../components/Shops";
import NavigationBhome from "../components/Navigation/NavigationBhome";
import SearchboxB from "../barbercomps/SearchboxB";
import BookingDetails from "../components/BookingDetails";
import AppointmentState from "../context/AppointmentState";
import MyAppointments from "../components/MyAppointments";
import Reviews from "../barbercomps/Reviews";
import AppointmentsB from "../barbercomps/AppointmentsB";
import Dashboard from "../components/Dashboard";
import Bookingbyday from "../barbercomps/Bookingbyday";
import NavigationLBT from "../components/Navigation/NavigationLBT";
import DashboardB from "../barbercomps/DashboardB";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            services: Services,
            features: Features,
            user: {
                id: "",
                name: "",
                email: "",
                joined: ''
            }
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });

    }
    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                joined: data.joined
            }
        })
    }
    render() {

        const searchedServices = this.state.services.filter((service) => {
            return service.service.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        const searchedFeatures = this.state.features.filter((feature) => {
            return feature.service.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.services.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <>
                    <AppointmentState>
                        <Router>
                            <div className="tc">



                                <Routes>
                                    <Route path='/' element={<><Navigation />
                                        <Login loadUser={this.loadUser} /></>} />
                                    <Route path='/signin' element={<><Navigation /><Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} /></>} />
                                    <Route path='/barberlogin' element={<><NavigationBP /><Barberlogin /></>} />
                                    <Route path='/barberregister' element={<><NavigationBP /><Barberregister /></>} />


                                    <Route path='/home' element={<>
                                        <NavigationCS />
                                        <Logo />
                                        <Searchbox onSearchChange={this.onSearchChange} />
                                        <ErrorBoundary>
                                            <ServiceList services={searchedServices} />
                                        </ErrorBoundary></>} />
                                    <Route path='/barberhome' element={<>
                                        <NavigationBhome />
                                        <Logo />
                                        <SearchboxB onSearchChange={this.onSearchChange} />
                                        <ErrorBoundary>
                                            <ServiceList services={searchedFeatures} />
                                        </ErrorBoundary></>} />
                                    <Route path='/searchshops' element={<>
                                        <NavigationCS />
                                        <Shops /></>} />
                                    <Route path='/bookingdetails' element={<>
                                        <NavigationCS />
                                        <BookingDetails /></>} />
                                    <Route path='/bookedappointments' element={<>
                                        <NavigationCS />
                                        <MyAppointments /></>} />
                                    <Route path='/reviews' element={<>
                                        <NavigationBhome />
                                        <Reviews /></>} />
                                        <Route path='/pendingappointments' element={<>
                                        <NavigationLBT />
                                        <Bookingbyday/></>} />
                                        <Route path='/dashboard' element={<>
                                        <NavigationCS />
                                        <Dashboard /></>} />
                                        <Route path='/bookingtracker' element={<>
                                        <NavigationBhome />
                                        <AppointmentsB /></>} />
                                        <Route path='/dashboardb' element={<>
                                        <NavigationBhome />
                                        <DashboardB /></>} />

                                </Routes>

                            </div >
                        </Router>
                    </AppointmentState>
                </>
            );
        }

    }
}

export default App;