import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="bg-zinc-700 flex justify-between px-20 py-4">
			<Link to={'/'} className="text-white font-bold">
				<h1>REact Mysql</h1>
			</Link>

			<ul className="flex gap-x-1">
				<li>
					<Link to="/" className="bg-slate-200 px-2 py-1 rounded-md">
						Home
					</Link>
				</li>
				<li>
					<Link to="/new" className="bg-teal-200 px-2 py-1 rounded-md">
						Create task
					</Link>
				</li>
			</ul>
		</div>
	);
};

export { Navbar };
