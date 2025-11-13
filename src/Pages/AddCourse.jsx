import React, { use } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { toast } from 'react-toastify';

const AddCourse = () => {
    const { user } = use(AuthContext);
    // console.log(user)
    // const [img, setImg] = useState();

    const handleaddcourse = (e) => {
        e.preventDefault();
        // const form = e.target;
        // const imageFile = form.imageUrl.files[0];

        // if (!imageFile) {
        //     c        onsole.error("No image selected");
        //     return;
        // }


        // const formData = new FormData();
        // formData.append("image", imageFile);

        // const imgbbApiKey = "0cbe033193bd8597ae0ca4ded390e4d1";
        // fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
        //     method: "POST",
        //     body: formData,

        // })
        //     .then(res => res.json())
        //     .then(apiResponse => {
        //         if (!apiResponse.success) {
        //             console.error("ImgBB upload failed", apiResponse);
        //             return;
        //         }
        //         const uploadedImageUrl = apiResponse.data.display_url;
        //         setImg(uploadedImageUrl)
        //     })






        const userInputData = {
            title: e.target.title.value,
            category: e.target.category.value,
            description: e.target.description.value,
            imageUrl: e.target.imageUrl.value,
            price: e.target.price.value,
            duration: e.target.duration.value,
            created_at: new Date(),
            created_by: user.email,
        };


        console.log(userInputData);
        fetch("https://onlinelearningplateform.vercel.app/allcourse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInputData)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("added successfully...")

            })
            .catch(error => {
                console.log(error.message)
                toast.error("added failed cheek internet connection...")
            });


    };


    return (
        <div className='py-10' >
            <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <title>onlinelearningplatform-add-course</title>
                <div className="card-body p-6 relative">
                    <h2 className="text-2xl font-bold text-center mb-6">Add Course</h2>
                    <form className="space-y-4" onSubmit={handleaddcourse}>
                        {/* Name Field */}
                        <div>
                            <label className="label font-medium">Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Enter name"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div>
                            <label className="label font-medium">Category</label>
                            <select
                                defaultValue={""}
                                name="category"
                                required
                                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                <option value="Frontend Development">Frontend Development</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Frontend Styling">Frontend Styling</option>
                                <option value="Backend Development">Backend Development</option>
                                <option value="Database Management">Database Management</option>
                                <option value="Full Stack Development">Full Stack Development</option>
                                <option value="Frontend Frameworks">Frontend Frameworks</option>
                                <option value="Cloud Services">Cloud Services</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Description Textarea */}
                        <div>
                            <label className="label font-medium">Description</label>
                            <textarea
                                name="description"
                                required
                                rows="3"
                                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                                placeholder="Enter description"
                            ></textarea>
                        </div>

                        {/* imageUrl */}
                        <div>
                            <label className="label font-medium">imageUrl</label>
                            <input
                                type="url"
                                name="imageUrl"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="https://example.com/image.jpg "
                            />
                        </div>
                        {/* price */}
                        <div>
                            <label className="label font-medium">Price</label>
                            <input
                                type="number"
                                name="price"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="price"
                            />
                        </div>
                        {/* Duration*/}
                        <div>
                            <label className="label font-medium"> Duration</label>
                            <input
                                type="text"
                                name="duration"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Duration"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-primary to-secondary hover:from-pink-600 hover:to-primary"
                        >
                            Add Course
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddCourse;