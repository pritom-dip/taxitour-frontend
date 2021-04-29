import { useForm } from "react-hook-form";

const TaxiBooking = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="tab-content form-wrapper clearfix m-4">
            <div className="tab-pane active" id="1a">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label className="w-100">
                            <strong>Airport*</strong>
                        </label>
                        <select {...register("airport", { required: true })} name="airport" className="form-control" >
                            <option value="">Select one</option>
                            <option value="Amsterdam Airport Schiphol">Amsterdam Airport Schiphol</option>
                            <option value="Eindhoven Airport">Eindhoven Airport</option>
                        </select>
                        {errors.airport && <span className="text-danger">Please Select an airport first.</span>}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="w-100">
                                    <strong>First Name*</strong>
                                </label>
                                <input {...register("fname", { required: true })} type="text" name="fname" className="form-control" placeholder="First Name" />
                                {errors.fname && <span className="text-danger">First Name is required</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="w-100">
                                    <strong>Last Name*</strong>
                                </label>
                                <input {...register("lname", { required: true })} type="text" name="lname" className="form-control" placeholder="First Name" />
                                {errors.lname && <span className="text-danger">Last Name is required</span>}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="w-100">
                                    <strong>Date*</strong>
                                </label>
                                <input {...register("date", { required: true })} type="date" name="date" className="form-control" placeholder="Date" />
                                {errors.date && <span className="text-danger">Please select a date</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="w-100">
                                    <strong>Pick Up Time*</strong>
                                </label>
                                <input {...register("pick_up_time", { required: true })} type="time" name="pick_up_time" className="form-control" placeholder="Pick Up Time" />
                                {errors.pick_up_time && <span className="text-danger">Please select time</span>}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="w-100">
                                    <strong>Mobile Num*</strong>
                                </label>
                                <input {...register("mobile_number", { required: true })} type="text" name="mobile_number" className="form-control" placeholder="Mobile" />
                                {errors.mobile_number && <span className="text-danger">Mobile number is required</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="w-100">
                                    <strong>Email*</strong>
                                </label>
                                <input {...register("email", { required: true })} type="email" name="email" className="form-control" placeholder="Email" />
                                {errors.email && <span className="text-danger">Email is required</span>}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="w-100">
                                    <strong>Room No</strong>
                                </label>
                                <input {...register("room_no")} type="text" name="room_no" className="form-control" placeholder="Room No" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="w-100">
                                    <strong>Nr Of Persons*</strong>
                                </label>
                                <input {...register("num_of_persons", { required: true })} type="text" name="num_of_persons" className="form-control" placeholder="Num Of Persons" />
                                {errors.num_of_persons && <span className="text-danger">Num of person is required</span>}
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="w-100">
                            <strong>Pick Up Location*</strong>
                        </label>
                        <input {...register("pick_up_location", { required: true })} type="text" name="pick_up_location" className="form-control" placeholder="Pick Up Location" />
                        {errors.pick_up_location && <span className="text-danger">Pick Up Location is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="w-100">
                            <strong>Message</strong>
                        </label>
                        <textarea {...register("message")} name="message" className="form-control" placeholder="Message" style={{ height: '100px !important' }}></textarea>
                    </div>

                    <div>
                        <input type="submit" className="btn btn-info" />
                    </div>
                </form>
            </div>
            <div className="tab-pane" id="2a">
                <h3>We use the className nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
            </div>
        </div>
    );
};

export default TaxiBooking;