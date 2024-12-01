import img from '@/assets/daniel-beckemeier-VhU-Qs6dFCo-unsplash.jpg'
import AuthWrapper from '@/components/AuthWrapper';
import Date from '@/components/Date';
import Logo from '@/components/Logo';
import { User } from '@/utils/types';
import { HOSTED_API_LINK } from '@/utils/variables';
import jwt from 'jsonwebtoken'
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
type jwtType = {
  id: string
}
const page = async () => {
  let token: jwtType | undefined;
  let d: User | undefined
  if ((await cookies()).get("jwt")) {
    token = jwt.verify((await cookies()).get("jwt")?.value, "heaJWUcDBplyWuYg")
    d = await fetch(`${HOSTED_API_LINK}/users/${token?.id}`).then((da) => da.json())
  }

  if (d?.data) {
    redirect('/dashboard')
  }

  // fetch(
  //   `http://127.0.0.1:8000/mill/${token?.value}`, {
  //   method: "PATCH",
  //   body: { 
  //     "tn": "abcde1"
  //    },
  //    headers: {
  //     ""
  //    }
  // }
  // ).then(e => e.json())
  return (
    <div className={`min-h-screen after:w-full after:h-full after:bg-[#0000007c] after:left-0 after:top-0 z-[1] after:absolute  land relative`}>
      {/* <Edit /> */}

      <img src={img.src} alt='land' className='h-full select-none z-[-1] opacity-[0.8] absolute left-0 top-0 object-cover w-full' />
      <section className='px-[2vw] relative z-[99] py-[15px]'>
        <div className='flex justify-between text-white items-center'>
          <Logo color='black' />
          <h4 className='text-[18px] cursor-pointer font-semibold'>{token?.id ? d?.data.username : "user profile"}</h4>
        </div>
        <section className='px-[5vw] max-sm:pt-[20vh]'>
          <section className='sm:flex min-h-screen max-sm:gap-[20px] items-center justify-between'>
            <section className='flex flex-1 max-sm:items-center flex-col lg:-[30vh]'>
              {["Optimize Your Mill's Performance", "Effortlessly Monitor and Record Production ", "Downtime for Maximum Efficiency!"].map(el => (
                <div className='text-[20px] text-[#fff] font-semibold'>{el}</div>
              ))}
            </section>
            {!token &&
              <section className='flex-[0.50] mt-[30px]'>
                <AuthWrapper />
              </section>
            }
          </section>
        </section>
      </section>
      <section className='fixed'>
        <Date />
      </section>
    </div>
  )
}

export default page;