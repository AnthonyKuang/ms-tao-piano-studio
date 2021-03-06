import Card from './card';
import styles from './cards.module.css';
import { useEffect } from 'react';

export default function Cards({ section }) {
  useEffect(() => {
    const sliders = document.querySelectorAll(`.${styles.cards}`);
    let isDown = false;
    let startX;
    let scrollLeft;

    sliders.forEach((slider) => {
      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  });

  if (section === 'news') {
    return (
      <div className={styles.cards}>
        <Card
          year='2019'
          section={section}
          img='2019-alameda-east-competition-d'
        />
        <Card year='2018' section={section} img='2019-usomc-max' />
        <Card year='2017' section={section} img='2019-usomc-angela' />
        <Card year='2016' section={section} img='2019-usomc-michael' />
        <Card year='2015' section={section} img='2019-usomc-amber' />
        <Card year='2014' section={section} img='alameda-division-c-winners' />
        <Card year='2013' section={section} img='img14' />
        <Card year='2012' section={section} img='img13' />
        <Card year='2011' section={section} img='2019-usomc-jessica' />
      </div>
    );
  } else if (section === 'media') {
    return (
      <div className={styles.cards}>
        <Card
          label='Alex Ren'
          title='Kabalevsky Op. 46 No. 3'
          img='alex-ren'
          url='https://www.youtube.com/watch?v=HusCKaMlSTQ'
        />
        <Card
          label='Max Chan'
          title='Thunder in the Dry Season'
          img='max-chan'
          url='https://www.youtube.com/watch?v=BZFTfuOHfa4'
        />
        <Card
          label='Alex Ren & Ethan Yu'
          title='Beethoven Marcia I & II'
          img='alex-ren&ethan-yu'
          url='https://www.youtube.com/watch?v=Javk0KS-Y9o'
        />
        <Card
          label='Alex Ren & Ethan Yu'
          title='Mozart Andante from Sonata K.381/123a in G Major'
          img='alex-ren&ethan-yu2'
          url='https://www.youtube.com/watch?v=nrV_OQiQG4c'
        />
        <Card
          label='Anthony Kuang'
          title="Menotti The Stranger's Dance"
          img='anthony-kuang'
          url='https://www.youtube.com/watch?v=JKBuLxU-suI'
        />
        <Card
          label='Erika Yang & Jessica Yuan'
          title='Debussy Ballet from Petite Suite'
          img='erika-yang&jessica-yuan'
          url='https://www.youtube.com/watch?v=TQZpdNqGD1Y'
        />
        <Card
          label='Anthony Kuang'
          title='Brown March'
          img='anthony-kuang2'
          url='https://www.youtube.com/watch?v=LNNKoIBYgEo'
        />
        <Card
          label='Emily Guo & Lilly Jiang'
          title='Liebeslider Waltz Op. 52a #9 in F Major'
          img='lilly-jiang&emily-guo'
          url='https://www.youtube.com/watch?v=cDHzpu7hadM'
        />
        <Card
          label='Emily Guo & Lilly Jiang'
          title='Andre Sonatina Op. 45 #3 in F Major'
          img='lilly-jiang&emily-guo2'
          url='https://www.youtube.com/watch?v=4LSR_lWakOw'
        />
        <Card
          label='Jeffrey Tian'
          title='Bloch Dream'
          img='jeffrey-tian'
          url='https://www.youtube.com/watch?v=SEsVDERk7Mc'
        />
        <Card
          label='Stephanie Shao'
          title='Lombaridze Evening on the Mountain'
          img='stephanie-shao'
          url='https://www.youtube.com/watch?v=UdCgASzBbEE'
        />
        <Card
          label='Alex Ren'
          title='Bach Invention #9 in f minor'
          img='alex-ren2'
          url='https://www.youtube.com/watch?v=VGAW4mXaPH8'
        />
        <Card
          label='Lilly Jiang'
          title='Li 绣荷包'
          img='lilly-jiang'
          url='https://www.youtube.com/watch?v=gPN54ljAldI'
        />
        <Card
          label='Alex Ren'
          title='Bartok Chromatic Invention, Mikrokosmos Vol 3 #92'
          img='alex-ren3'
          url='https://www.youtube.com/watch?v=9d2-MFdH_fc&feature=emb_title'
        />
      </div>
    );
  }
}
