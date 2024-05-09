import PropTypes from 'prop-types';


function Dashboard({ children }) {
    return (
        <div className="flex w-[200px] gap-6 h-[80px] bg-zinc-900/50 rounded-md p-2 border-2 border-red-600 skew-12">
            {children}
        </div>
    );
}

Dashboard.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Dashboard;