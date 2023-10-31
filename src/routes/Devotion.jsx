import DevotionForm from '../features/DevotionComponents/DevotionForm';
import DevotionDisplay from '../features/DevotionComponents/DevotionDisplay';

const Devotion = () => {
  return (
    <div className="mt-12 bg-blue-500 flex container mx-auto space-x-6 pl-6 ">
      <DevotionDisplay />
      <DevotionForm />
    </div>
  )
}

export default Devotion