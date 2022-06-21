import './jumbo.scss';
import { useTranslation } from 'react-i18next';

export default function Jumbo() {
  const { t } = useTranslation();
  return (
    <section id="home" className="jumbo">
            
      <div className="jumbo flex">
        <div className="container-custom flex">
            
          <div className="jumbo-title">
            <h1>{t('jumbo.title1')}<br/>{t('jumbo.title2')}</h1>
          </div>

          <div className="divider">
              <div className="red"></div>
              <div className="orange"></div>
              <div className="yellow"></div>
              <div className="white"></div>
              <div className="light-green"></div>
              <div className="green"></div>
              <div className="dark-green"></div>
              <div className="gray"></div>
          </div>

          <div className="jumbo-subtitle">
              <h3>{t('jumbo.subtitle')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};