import React from 'react'

export default function form() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows={3}
                        defaultValue={""}
                    />
                </div>
                <div>
                    <div className="mb-3">
                        <label htmlFor="Content" className="form-label">
                            Content
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Content" />
                    </div>

                    <div>
                        <button className='btn btn-primary' type='submit' >Submit</button>
                    </div>
                </div>



            </form></>
    )
}
