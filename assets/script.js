// for top banner form
let radioButtonsBannerFrom = document.querySelectorAll('.form-check-input');
let bannerForm = document.getElementsByClassName('search-engine-parent')[0];
document.addEventListener('DOMContentLoaded',()=>{
    

    radioButtonsBannerFrom.forEach((i)=>{
        i.addEventListener('click',()=>{
            let travelType = i.getAttribute('id');
            if(travelType=='oneWay'){
                bannerForm.innerHTML = ""
                bannerForm.innerHTML = 
                `<div class="search-engine d-flex flex-column  justify-content-center align-items-center pb-4 pt-3 px-3 mt-4 gap-3 gap-3 flex-wrap flex-lg-nowrap">
                    <div class="direct-indirect text-start w-100 py-0 my-0">
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" checked type="radio" name="" id="any" value="any">
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="any">Any</label>
                        </div> 
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" type="radio" name="" id="direct" value="direct">
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="direct">Direct</label>
                        </div>
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" type="radio" name="" id="indirect" value="indirect" >
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="indirect">Indirect</label>
                        </div>                   
                    </div>
                    <div class="first-layer w-100">
                        <div class="row m-auto gx-1 gy-3 gy-lg-0">
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1  pe-3 ">
                                  <input type="text" class="form-control rounded-0 border-0 fw-light" name="banner_form_origin" placeholder="Choose your Origin" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  <i class="fa-solid fa-location-dot fs-5 m-auto  text"></i>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1  pe-3 fw-light">
                                  <input type="text" class="form-control rounded-0 border-0 fw-light" name="destination" placeholder="Choose your Destination" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  <i class="fa-solid fa-location-dot fs-5 m-auto  text"></i>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1 fw-light">
                                  <input type="text" class="form-control rounded-0 border-0 " name="banner_form_date" placeholder="22-Aug-2022">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second-layer  w-100 ">
                        <div class="row m-auto gx-1  gy-3 gy-lg-0">
                            <div class="col-12 col-lg-3">
                                <div class="  ">
                                    <select name="typeOfPassenger" id="" class="bg-white border-0 w-100 custom-padding-banner-dropdown my-auto fw-light ps-2">
                                        <option value="null">Economy</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div>                                 
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="  ">
                                    <select name="typeOfPassenger" id="" class="bg-white w-100 border-0 custom-padding-banner-dropdown  fw-light ps-2 my-auto">
                                        <option value="null">Select Airline</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div> 
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="passenger  ">
                                    <select name="typeOfPassenger" id="" class="bg-white w-100 border-0 custom-padding-banner-dropdown  fw-light ps-2 bg-info my-auto">
                                        <option value="null">Passenger</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div> 
                            </div>
                            <div class="col-12 col-lg-2">
                                <button class="bg-danger justify-content-between w-100 h-100 text-white px-4  border-0 d-flex align-items-center my-auto">Search<i class="search-icon-banner fa-solid fa-magnifying-glass py-3 px-0 text-white"></i></button>
                            </div>
                        </div>

                    </div>
                </div>`
            }
            else if(travelType=='roundTrip'){
                bannerForm.innerHTML = ""
                bannerForm.innerHTML = 
                `<div class="search-engine d-flex flex-column  justify-content-center align-items-center pb-4 pt-3 px-3 mt-4 gap-3 gap-3 flex-wrap flex-lg-nowrap">
                    <div class="direct-indirect text-start w-100 py-0 my-0">
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" checked type="radio" name="" id="any" value="any">
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="any">Any</label>
                        </div> 
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" type="radio" name="" id="direct" value="direct">
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="direct">Direct</label>
                        </div>
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" type="radio" name="" id="indirect" value="indirect" >
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="indirect">Indirect</label>
                        </div>                   
                    </div>
                    <div class="first-layer w-100">
                        <div class="row m-auto gx-1 gy-3 gy-lg-0">
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1  pe-3 ">
                                  <input type="text" class="form-control rounded-0 border-0 fw-light" name="banner_form_origin" placeholder="Choose your Origin" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  <i class="fa-solid fa-location-dot fs-5 m-auto  text"></i>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1  pe-3 fw-light">
                                  <input type="text" class="form-control rounded-0 border-0 fw-light" name="destination" placeholder="Choose your Destination" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  <i class="fa-solid fa-location-dot fs-5 m-auto  text"></i>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1 fw-light">
                                  <input type="text" class="form-control rounded-0 border-0 " name="banner_form_date" placeholder="22-Aug-2022  29-Aug-2022">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second-layer  w-100 ">
                        <div class="row m-auto gx-1  gy-3 gy-lg-0">
                            <div class="col-12 col-lg-3">
                                <div class="  ">
                                    <select name="typeOfPassenger" id="" class="bg-white border-0 w-100 custom-padding-banner-dropdown my-auto fw-light ps-2">
                                        <option value="null">Economy</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div>                                 
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="  ">
                                    <select name="typeOfPassenger" id="" class="bg-white w-100 border-0 custom-padding-banner-dropdown  fw-light ps-2 my-auto">
                                        <option value="null">Select Airline</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div> 
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="passenger  ">
                                    <select name="typeOfPassenger" id="" class="bg-white w-100 border-0 custom-padding-banner-dropdown  fw-light ps-2 bg-info my-auto">
                                        <option value="null">Passenger</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div> 
                            </div>
                            <div class="col-12 col-lg-2">
                                <button class="bg-danger justify-content-between w-100 h-100 text-white px-4  border-0 d-flex align-items-center my-auto">Search<i class="search-icon-banner fa-solid fa-magnifying-glass py-3 px-0 text-white"></i></button>
                            </div>
                        </div>

                    </div>
                </div>`            
            }
            else if(travelType=='multipleCity'){
                bannerForm.innerHTML = ""
                bannerForm.innerHTML = 
                `<div class="search-engine d-flex flex-column  justify-content-center align-items-center pb-4 pt-3 px-3 mt-4 gap-3 gap-3 flex-wrap flex-lg-nowrap">
                    <div class="direct-indirect text-start w-100 py-0 my-0">
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" checked type="radio" name="" id="any" value="any">
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="any">Any</label>
                        </div> 
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" type="radio" name="" id="direct" value="direct">
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="direct">Direct</label>
                        </div>
                        <div class="form-check form-check-inline mx-3 mt-2">
                          <input class="form-check-input mt-2" type="radio" name="" id="indirect" value="indirect" >
                          <label class="form-check-label fs-6 dark-blue-text fw-semibold Montserrat" for="indirect">Indirect</label>
                        </div>                   
                    </div>
                    <div class="first-layer w-100">
                        <h6 class="text-danger text-start px-1 py-1">Flight 1</h6>
                        <div class="row m-auto gx-1 gy-3 gy-lg-0">
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1  pe-3 ">
                                  <input type="text" class="form-control rounded-0 border-0 fw-light" name="banner_form_origin" placeholder="Choose your Origin" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  <i class="fa-solid fa-location-dot fs-5 m-auto  text"></i>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1  pe-3 fw-light">
                                  <input type="text" class="form-control rounded-0 border-0 fw-light" name="destination" placeholder="Choose your Destination" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  <i class="fa-solid fa-location-dot fs-5 m-auto  text"></i>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1 fw-light">
                                  <input type="text" class="form-control rounded-0 border-0 " name="banner_form_date" placeholder="22-Aug-2022  29-Aug-2022">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="first-layer w-100">
                        <h6 class="text-danger text-start px-1 py-1">Flight 2</h6>
                        <div class="row m-auto gx-1 gy-3 gy-lg-0">
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1  pe-3 ">
                                  <input type="text" class="form-control rounded-0 border-0 fw-light" name="banner_form_origin" placeholder="Choose your Origin" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  <i class="fa-solid fa-location-dot fs-5 m-auto  text"></i>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1  pe-3 fw-light">
                                  <input type="text" class="form-control rounded-0 border-0 fw-light" name="destination" placeholder="Choose your Destination" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                  <i class="fa-solid fa-location-dot fs-5 m-auto  text"></i>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="input-group py-2 my-0 bg-white border-1 fw-light">
                                  <input type="text" class="form-control rounded-0 border-0 " name="banner_form_date" placeholder="22-Aug-2022  29-Aug-2022">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="text-end w-100">
                        <div class="row">
                            <div class="d-flex justify-content-end">
                                <div class="col-12 col-lg-2 offset-lg-10 m-0">
                                    <button class="dark-blue-bg text-white border-0 w-100  px-3 py-3  ">Add Flight</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second-layer  w-100 ">
                        <div class="row m-auto gx-1 gy-3 gy-lg-0">
                            <div class="col-12 col-lg-3">
                                <div class="  ">
                                    <select name="typeOfPassenger" id="" class="bg-white border-0 w-100 custom-padding-banner-dropdown my-auto fw-light ps-2">
                                        <option value="null">Economy</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div>                                 
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="  ">
                                    <select name="typeOfPassenger" id="" class="bg-white w-100 border-0 custom-padding-banner-dropdown  fw-light ps-2 my-auto">
                                        <option value="null">Select Airline</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div> 
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="passenger  ">
                                    <select name="typeOfPassenger" id="" class="bg-white w-100 border-0 custom-padding-banner-dropdown  fw-light ps-2 bg-info my-auto">
                                        <option value="null">Passenger</option>
                                        <option value="adult">Adult</option>
                                        <option value="kid">Kid</option>
                                        <option value="infant">Infant</option>
                                    </select>
                                </div> 
                            </div>
                            <div class="col-12 col-lg-2 ">
                                <button class="bg-danger justify-content-between w-100 h-100 text-white px-4  border-0 d-flex align-items-center my-auto">Search<i class="search-icon-banner fa-solid fa-magnifying-glass py-3 px-0 text-white"></i></button>
                            </div>
                        </div>

                    </div>
                </div>`            
            }
            console.log({travelType})
            // bannerForm.children[1].innerHTML= "";

        })
        
    })

})
