// import Card from './Card';
// import pic3 from './../asset/3.jpg';
import logonaam from './../images/LogoNaam.png';
import rusaraya from './../images/rusaraya.jpg';
import patria from './../images/patria.jpg';
import naam from './../images/naam.png';

const Detail = ()=> {
    return(
        <div>
            <div class="container-fluid first-container position-relative">
        <div class="row py-5">
        </div>

        <div data-aos="zoom-in" class="container second-container position-absolute py-3 px-4 start-0 end-0 shadow">
          <div class="container d-flex mb-3 justify-content-between align-items-end">
            <div class="mx-2">
              <h5 class="text-light fs-14 fw-bold"><i class="fa-solid fa-music"></i> Engkaulah</h5>
              <small class="fw-bold fs-12 text-dark">- Sholawat</small>
            </div>

            <div>
              <small class="text-light fw-bold fs-12"><span class="fw-bold text-dark">Song by</span> Munir DEBU</small>
              <p class="fw-bold fs-12 text-light"><span class="fw-normal fs-12">Composed -</span> Dede Patria</p>
            </div>
          </div>

        <div class="container rounded">
          <div>
            <iframe class="w-100 youtube" src="https://www.youtube.com/embed/2Ksef4qtERs" title="YouTube video player"
            frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div class="container mt-3 d-flex flex-wrap justify-content-between">
          <div class="d-flex mb-2">
            <div class="foto d-flex justify-content-center align-items-center">
              <img src={naam} width="50" alt=""/>
            </div>

            <div>
              <small class="fw-bold text-muted">Music</small>
              <p class="fw-bold text-dark">Na'am Grupo <br/><span class="text-info fs-12"><i class="fa-brands fa-youtube"></i> Munir DEBU</span></p>
            </div>
          </div>
          <div class="mb-2">
              <div class="d-flex mb-2">
                <img src={patria} width="30" alt=""/>
                <small class="ms-2 fw-bold text-muted fs-12">Patria Home Recording</small>
              </div>
              <div class="d-flex align-items-center">
                <img src={rusaraya} width="30" alt=""/>
                <small class="ms-2 fs-12">Rusa Raya Creator</small>
              </div>
          </div>
        </div>


        <div class="container my-2 shadow">
          <div class="card border-0 w-100">
            <h4 class="text-dark fw-bold">
              Desc
            </h4>
            <p class="fs-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit amet dolor aperiam consectetur vitae excepturi esse doloremque sapiente nulla aliquid.</p>
          </div>
        </div>

        
      </div>

        
        
        <a data-aos="fade-in" data-aos-duration="2000" href="index.html" class="p-3 text-decoration-none fw-bold text-dark position-absolute start-0 top-0"><i class="fa-solid fa-arrow-left"></i> Back</a>

        <div data-aos="zoom-out" data-aos-duration="2000" class="logo-kanan-atas position-absolute top-0 me-2 mt-2 shadow end-0 d-flex justify-content-center align-items-center">
          <img src={logonaam} width="40" alt=""/>
        </div>
    </div>
        </div>
    );
}

export default Detail;