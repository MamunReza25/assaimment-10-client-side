
import { AuthContext } from '../ContextApi/AuthContext';
import { Link } from 'react-router';

const EnrollCard = ({ product }) => {

    const { _id, title, imageUrl, price, duration, category, description, created_by } = product
    return (
        <div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <figure className="h-48 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {title}</h2>
                    <div className="badge text-xs badge-xs badge-secondary rounded-full">{category}</div>
                    <div className="text-xs text-secondary">{created_by}</div>
                    <p className="line-clamp-1">
                        {description}
                    </p>

                    <div className="card-actions justify-between items-center mt-4">
                        <div className="flex gap-4 text-sm text-base-content/60">
                            <p>{duration}</p>
                            <p>{price}</p>
                        </div>

                        <Link to={`/allcourse/${_id}`} className="btn rounded-full bg-linear-to-r from-secondary to-primary hover:from-blue-600 hover:to-pink-500 text-white w-full btn-sm">View</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollCard;