import AddSweetForm from './components/AddSweetForm';
import SweetList from './components/SweetList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-32">Sweet Shop Management System</h1>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Add Form */}
        <div className="md:w-1/3 w-full">
          <AddSweetForm />
        </div>

        {/* Sweets List */}
        <div className="md:w-2/3 w-full">
          <SweetList />
        </div>
      </div>
    </div>
  );
};

export default App;
