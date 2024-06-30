import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { selectCarbs } from '../../store/selectors';
import Store from '../../store';

type FeedCardProps = {
  title: string;
  description: string;
  img: string;
  ingredients: Array<string>;
  steps: Array<string>;
};

const FeedCard = ({
  title,
  description,
  img,
  ingredients,
  steps,
}: FeedCardProps) => (
  <Card className="my-4 mx-auto">
    <div className="h-32 w-full relative">
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

const Feed = () => {
  const carbRecipes = Store.useState(selectCarbs);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications
          open={showNotifications}
          onDidDismiss={() => setShowNotifications(false)}
        />
        {carbRecipes.map((i, index) => (
          <FeedCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
