'use client';
import React from 'react';

const ParallelogramImageBackground = () => {
  // Grid dimensions for the full background
  const totalRows = 7;
  const totalColumns = 12;
  
  // Visible portion dimensions
  const visibleRows = 7;
  const visibleColumns = 12;
  
  // Placeholder for your image links - replace these with your actual images
  const placeholderImages = [
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726223233-d783bdf65c0fc15cf17618b9a8a301f7-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726214490-93846371f0af448f9071be55879a035a-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207491-635eb874c7901a556b9852a4807f68da-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207386-d57e48ef257c318a3ce7d83d7d7200c1-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725072728-c9bd382d86c1b61feb5ce3f1a466fcf1-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725043069-e4f43c8ed7ada37451d583bc0a332a7c-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726236747-2c39f6dd3b04446be2017a51bc2ec0b9-4.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233952-31750b753f3a36a72df402e4ea96f5ba-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233364-f802a6e2bcc1d6d395cf241e49c5da74-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726234814-5f06590cc2b005e8fc2c5edda005c7a7-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726204780-c3ee3f65fd45de7f4063fb4ee6a22da2-4.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726195511-b0783ffbd33563360f3c2daa78ce4389-1.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726186641-b6c39153ad8976ef1cf1d246f1593f46-3.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726141909-ec22500f2a669976ba1c26b097fd8bf4-4.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725061062-b2f87a7308422580800a8434cdbda024-1.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726183989-43f404f70a9c7b61a54768d35fc4b9b9-1.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232901-a484142cb7c49809cb014a6720abc84f-4.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232670-07ce7f60ce556c66ed2c6d3350d31584-2.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232838-df511a668c482f209fdc7bf21ea86fd3-2.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232418-67c5987c6b9e15de37e3e0f4afa749f3-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725059885-cceb9261f98c9ecec148e0067b7fc061-1.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725038501-a401b71e0065d40d0a3d63cb13300fc7-1.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725038438-d1b930ea12de4ffdb869184a8c089193-1.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725037471-35d2ebf1d17b0d44053cab41b92558cd-1.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725043468-588dd5ce6fc4b24369004d149a2551c5-1.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726195952-1a6d6376a10e8dbf522206f2de1e11d6-4.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232250-cf7deef1c4ac329a935e4ddf0fe7bd8d-4.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232124-a305892b0853ab13d526d22b66c72351-3.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726230610-90d1e98a1c2f10e318ece475b1ba75ab-4.png", 
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726224726-b0828339f1d2cb2df05f41f7c7f249bf-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725038165-a4d78c4daf5a06e62fa384ff480135f6-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726205431-51653d9491a60735af0ba1f553777245-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207995-cffd444e1a737d40bd1d1a80ddcd602d-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726209236-8eefe86f96f604fe6b9022acf2995f72-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726210770-9abab996e598c4cdb6c331f8fe0958a1-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726210854-e398a2c73b5362b0359685e1ed47ca32-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726221825-557ee758d5b61159307161bf35eb3c71-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726222687-90ab47e5ed613ffaaf55779818e21b40-4.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726223254-9ab53ce6cb5034f72616c4c0b1a02202-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726224137-0d5b80273111bc600cbed8b08ccfdde5-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726227037-0cf1b7573534bc3cb91f87470f1a31c3-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726226869-bcf87a8b1ae7935aa4b70d9c7980f46d-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726226890-bb7e3a47118ed5be3ec9d05ee4edbfb4-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726230821-f44fd98ab3bb1e88d4f17ae596c954aa-4.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726230926-5ff96db91d644219e9d736bdb4c97831-4.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232271-23dedcc5f1edcd25c37a4c7652d74533-4.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232565-c282be7897671905a49b3534e08a0773-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233069-59034baf59a4a0409ea6bf6348496bc0-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233217-46906a3479a455a35de746786bc2dcab-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726234919-4e10c2244cd7149620c2ee1a5d9cb68a-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726235150-3bb61cdd56a4fe268615c28bc6bd8002-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726237336-b2be182ee6aecc97854a1ef963898a89-2.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233490-ea879283f80a9da1313781e34246e940-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725033835-445671d730d5919758f4ade6c9c84124-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725042879-741c30c88367bf0ecba510f8042ab4e5-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725087208-6b47ce8e594a3db87a93faf4d61ba875-1.png",
  ];
  
  // Angle for the parallelogram skew effect
  const skewAngle = -10; // in degrees
  
  return (
    <div className="fixed inset-0 overflow-hidden bg-black -z-10">
      <div 
        className="absolute inset-0 flex flex-col"
        style={{ 
          transform: `scale(1.2)`, // Zoom effect to show only portion
        }}
      >
        {Array.from({ length: visibleRows }).map((_, rowIndex) => (
          <div 
            key={rowIndex}
            className="flex-1 flex"
            style={{
              flexDirection: rowIndex % 2 === 0 ? 'row' : 'row-reverse', // Alternate direction
            }}
          >
            {Array.from({ length: visibleColumns }).map((_, colIndex) => {
              // Calculate the actual index in the full grid
              const actualColIndex = rowIndex % 2 === 0 
                ? colIndex + Math.floor((totalColumns - visibleColumns) / 2)
                : (totalColumns - colIndex - 1) - Math.floor((totalColumns - visibleColumns) / 2);
              
              const actualRowIndex = rowIndex + Math.floor((totalRows - visibleRows) / 2);
              const imageIndex = actualRowIndex * totalColumns + actualColIndex;
              
              return (
                <div 
                  key={colIndex}
                  className="flex-1 p-0.5"
                  style={{
                    transform: `skewX(${skewAngle}deg)`,
                  }}
                >
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={placeholderImages[imageIndex]}
                      alt={`Collage image ${rowIndex}-${colIndex}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallelogramImageBackground;