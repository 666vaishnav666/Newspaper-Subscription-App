import React from 'react'
import NavBar from './NavBar'

const ViewSubs = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <NavBar/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone No.</th>
                                            <th scope="col">House No.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Gojo Satoru</td>
                                            <td>1234567890</td>
                                            <td>123</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Sukuna</td>
                                            <td>1467846853</td>
                                            <td>@456</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Yuta</td>
                                            <td>5840673923</td>
                                            <td>789</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Yuji</td>
                                            <td>5739730285</td>
                                            <td>474</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Naruto</td>
                                            <td>9673068447</td>
                                            <td>374</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Sasuke</td>
                                            <td>8375930485</td>
                                            <td>853</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Madara</td>
                                            <td>7593759375</td>
                                            <td>253</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Mikey</td>
                                            <td>9365296394</td>
                                            <td>987</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>Draken</td>
                                            <td>6495739504</td>
                                            <td>649</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>Anos</td>
                                            <td>6395837593</td>
                                            <td>405</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSubs
