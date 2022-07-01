import React from 'react'

export default function about(props) {
  return (
    <>
            <div className="row featurette mt-4">
                <div className="col-md-7 d-flex" style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <h2 style={{color: props.mode==='dark'?'white':'black'}}>How we started! <span className="text-muted">The first step.</span></h2>
                    <p className="lead" style={{color: props.mode==='dark'?'white':'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis deserunt nisi, minus quasi cum, libero veniam fugiat totam aut quae consequuntur assumenda, similique accusantium placeat reprehenderit hic dolor incidunt natus distinctio. Id itaque eos similique cum non velit sequi.</p>
                </div>
                <div className="col-md-5">
                    <img src="https://i.pinimg.com/originals/8c/22/2c/8c222c3f4bc0a92105d90564f0abac4b.png" alt="" width={400} height={400} />
                </div>
            </div>

            <hr className="featurette-divider" style={{color: props.mode==='dark'?'white':'black'}} />

            <div className="row featurette">
                <div className="col-md-7 order-md-2 d-flex" style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <h2 style={{color: props.mode==='dark'?'white':'black'}}>How it's going <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead" style={{color: props.mode==='dark'?'white':'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati ducimus magnam natus maiores. Cupiditate architecto sunt itaque impedit. Voluptatem facilis aliquid quasi, illum necessitatibus cupiditate reiciendis ut harum porro perferendis libero ipsum minima voluptas. Magni adipisci autem veniam amet ex vitae libero porro corporis?</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src="https://i.pinimg.com/originals/bb/bb/7c/bbbb7c563cefd525cc5332a7280e446c.png" alt="" width={400} height={400} />

                </div>
            </div>

        </>
  )
}
