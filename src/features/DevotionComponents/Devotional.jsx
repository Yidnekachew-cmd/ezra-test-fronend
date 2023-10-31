import DevotionForm from './DevotionForm';
import DevotionDisplay from './DevotionDisplay';

const Devotion = () => {
  return (
    <div className='container mx-auto flex justify-between'>
        <DevotionForm />
        <DevotionDisplay />
    </div>
  )
}

export default Devotion