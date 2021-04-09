import Link from 'next/link';

type BannerProps ={
    id: string,
    image: string,
    title: string,
    description: string
}

const Banner = ({id, image, title, description}:BannerProps) =>{
    return (
      <div className="container-fluid core-banner">
        <div className="container d-flex py-4">
          <div className="d-flex align-items-center justify-content-center col _left">
            <div className="_content">
              <h1 className="py-2">{title}</h1>
              <p className="py-2">{description}</p>
              <Link href={"/product/" + id}>
                  Shop Now
              </Link>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center col _right">
            <img src={image} alt={"Product" + id + "image"} width={"275px"} />
          </div>
        </div>
      </div>
    );
}

export default Banner;