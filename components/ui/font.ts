import { Kanit, Roboto, Ubuntu, Cabin } from 'next/font/google'

export const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '800']
})

export const roboto= Roboto({
  subsets: ['latin'], 
  weight: ['400', '500'],
})
export const ubuntu = Ubuntu({ 
    subsets: ['latin'], 
    weight: ['400', '700'], 
});

export const cabin = Cabin({  
  subsets: ['latin'],  
  weight: ['400', '700'],  
});  