import UCSD from '@/components/UCSD';
import {resumeData} from '@/data/resumeData';

const UCSDPage = () => {
  return (
    <UCSD
      teaching={resumeData.teaching}
      clubs={resumeData.clubs}
    />
  );
};

export default UCSDPage;
