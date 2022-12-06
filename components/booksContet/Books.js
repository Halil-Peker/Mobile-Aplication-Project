import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Books.Style";

function Books() {
  return (
    <View style={styles.all}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: "https://avatars.mds.yandex.net/i?id=69ea5d8cca71abcf454bd425e915f5af-4304125-images-thumbs&n=13",
          }}
        />
        <View>
          <Text style={styles.bookName}>Sefiller</Text>
          <Text style={styles.authorName}>Victor HUGO</Text>
          <Text style={styles.authorName}>1606 Pages</Text>
        </View>

      </View>
        <View >
        <Text style={styles.container2}>- Sefiller -</Text>
        <Text style={styles.container3}>Sefiller romanının konusu 1815 yılında başlar ve 1832 yılına kadar devam eder. Kitabın ana karakteri olan Jean Valjean kız kardeşinin çocuğunu açlıktan kurtarmak için ekmek çalar fakat bu sırada yakalanır. Hırsızlık suçundan bey yıl mahkum olur. Fakat mahkumiyet sırasında tekrar kaçmaya çalıştığı için cezasını tamamlaması tam 19 yıl alır. Cezası bitip yeniden özgürlüğüne kavuştuğunda artık Jean Valjean çok farklı biridir. Yeniden hayata tutunmaya çalışır fakat eski bir mahkum olduğu için toplum tarafından dışlanır. Ne açlığını giderebilecek ekmek ne de soğuk günlerde ısınabilecek bir yer bulabilir. Sonunda yolu bir piskopos ile kesişir ve piskopos ona yemek ve yatacak yer sunar. Fakat gerek hapishane döneminde gerekse sonrasında yaşadıkları Jean Vajean’ın tüm duygularını yitirmesine neden olur ve piskoposa ait tüm gümüşleri çalarak kaçar. Fakat bu kadar yük ile yakalanması uzun sürmez ve suçunu onaylaması için piskoposun karşısına getirilir. Piskopos durumu görünce gümüşleri kendisinin verdiğini, hırsızlığın söz konusu olmadığını söyleyerek onun serbest bırakılmasını sağlar. Dahası ona iki gümüş şamdan daha verir ve karşılığında tek bir şey ister. Tüm bu gümüşleri iyi bir insan olma yolunda kullanmasını ister. Bu olay Jean Valjean’ın yok olan duygularını yeniden kazanmasını sağlar.</Text>

        </View>
    </View>
  );
}

export default Books;
