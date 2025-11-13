import React from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const UpdateCourse = () => {
    const product = useLoaderData()
    const { _id, title, imageUrl, price, duration, category, description, created_at, created_by } = product
    console.log(product)

    const handleUpdatecourse = (e) => {
        e.preventDefault();

        const userInputData = {
            title: e.target.title.value,
            category: e.target.category.value,
            description: e.target.description.value,
            imageUrl: e.target.imageUrl.value,
            price: e.target.price.value,
            duration: e.target.duration.value,

        };
        console.log(userInputData);
        fetch(`http://localhost:3000/allcourse/${_id}`, {
            method: "PUt",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInputData)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("update successfully..")
            })
            .catch(error => {
                console.log(error.message)
                toast.error("update failled...")
            });



    }


    return (
        <div className='py-10 bg-linear-to-t from-[#5E4AF1] to-[#BA0BF9] dark:to-[#1D232A] dark:from-[#1D232A] '>
            <div className="card border border-gray-200 bg-transparent w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <div className="card-body p-6 relative">
                    <h2 className="text-2xl font-bold text-center mb-6">Update Course</h2>
                    <form className="space-y-4 " onSubmit={handleUpdatecourse} >
                        {/* Name Field */}
                        <div>
                            <label className="label font-medium">Title</label>
                            <input
                                type="text"
                                defaultValue={title}
                                name="title"
                                required
                                className="input w-full rounded-full focus:border-0  focus:outline-gray-200 bg-transparent"
                                placeholder="Enter name"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div>
                            <label className="label font-medium">Category</label>
                            <select
                                defaultValue={category}
                                name="category"
                                required
                                className="select w-full rounded-full focus:border-0 focus:outline-gray-200 bg-transparent"
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
                                defaultValue={description}
                                required
                                rows="3"
                                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px] bg-transparent"
                                placeholder="Enter description"
                            ></textarea>
                        </div>

                        {/* imageUrl */}
                        <div>
                            <label className="label font-medium">imageUrl</label>
                            <input
                                type="url"
                                name="imageUrl"
                                defaultValue={imageUrl}
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-transparent"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>
                        {/* price */}
                        <div>
                            <label className="label font-medium">Price</label>
                            <input
                                type="number"
                                name="price"
                                defaultValue={price}
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-transparent"
                                placeholder="price"
                            />
                        </div>
                        {/* Duration*/}
                        <div>
                            <label className="label font-medium"> Duration</label>
                            <input
                                type="text"
                                name="duration"
                                defaultValue={duration}
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-transparent"
                                placeholder="Duration"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-primary to-secondary hover:from-pink-600 hover:to-primary"
                        >
                            Add Model
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCourse;