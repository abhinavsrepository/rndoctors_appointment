import { View, Text ,FlatList,Dimensions,Image,ImageUrl} from 'react-native'
import React from 'react'

export default function Slider() {
    const sliderList=[
        
            {
              id: 1,
              name: 'Slider 1',
              imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHiq4JF5tSTkg/profile-displayphoto-shrink_400_400/0/1667412765193?e=1704326400&v=beta&t=VQYQrunlUtup9jG5-M-XERJuGwmshV3sBX--yQNhH0Q'
            },
            {
              id: 2,
              name: 'Slider 2',
              imageUrl: 'https://drdeependra.com/asstes/images/hero-doctor-1.png'
            },
          ];
    
  return (
    <View style={{marginTop:10}}>
      <FlatList 
      data={sliderList}
      horizontal={true}showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <Image source={{uri:item.imageUrl}}
        style={{width:Dimensions.get('screen').width*0.9,
        height:270,borderRadius:13,margin:2}}/>
      )}/>
    </View>
  )
}