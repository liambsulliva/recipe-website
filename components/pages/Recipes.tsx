import Image from 'next/image';
import Card from '../ui/Card';
import Button from '../ui/Button';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonMenuButton,
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { search } from 'ionicons/icons';
import { selectRecipes } from '../../store/selectors';
import Store from '../../store';

type RecipeCardProps = {
  title: string;
  description: string;
  img: string;
  ingredients: Array<string>;
  steps: Array<string>;
};

const images = [
  {
      src: "/bananas.jpg",
      alt: "bananas",
  },
  {
      src: "/bananas-dark.jpeg",
      alt: "bananas-dark",
  },
  {
      src: "/avocados.jpg",
      alt: "avocados",
  },
  {
      src: "/avocados-dark.jpeg",
      alt: "avocados-dark",
  },
  {
      src: "/eggs.jpg",
      alt: "eggs",
  },
  {
      src: "/eggs-dark.jpeg",
      alt: "eggs-dark",
  }
];

const RecipeCard = ({
  title,
  description,
  img,
  ingredients,
  steps,
}: RecipeCardProps) => (
  <Card className="m-4 flex-grow">
    <div className="h-56 w-full relative">
      <Image
        className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
        src={img}
        alt={title}
        fill
      />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">
        {description}
      </p>
    </div>
  </Card>
);

const Recipe = () => {
  const recipes = Store.useState(selectRecipes);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className='text-left px-4 font-bold text-black'>Explore</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
              </IonButtons>
            <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar className='p-2'>
            <IonTitle size="large">Explore</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications
          open={showNotifications}
          onDidDismiss={() => setShowNotifications(false)}
        />
        <div className='flex'>
          <div className='flex flex-col lg:w-1/2'>
            <div className="flex flex-row gap-6 max-[430px]:gap-2 max-[430px]:mx-4 mx-10">
                <Button label='Carbs' onClick={() => setCurrentIndex(0)} />
                <Button label='Fats' onClick={() => setCurrentIndex(2)} />
                <Button label='Proteins' onClick={() => setCurrentIndex(4)} />
            </div>
            <IonGrid>
              <IonRow>
                {recipes.map((i, index) => (
                  <IonCol size="12" sizeMd="6" key={index}>
                    <RecipeCard {...i} />
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>
          <div className="w-1/2 max-lg:hidden">
              <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="h-full object-cover"/>
          </div>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Recipe;
