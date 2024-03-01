import classNames from 'classnames';
import React, { Fragment } from 'react'
import { useLocation, useMatch, useMatches } from 'react-router-dom';

const Breadcrumbs = () => {
    let matches = useMatches();

    let crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match: any) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match: any) => match.handle.crumb(match.data));

 
    return (
        <>
            {crumbs.length > 1 && <ol className="flex text-blue-600 px-2 pt-2 sm:pt-8 sm:px-8">
                {crumbs.map((crumb: any, index: number) => (
                    <Fragment key={index}>
                        <li  className={classNames('flex ', {
                            "!text-gray-500 cursor-default pointer-events-none": index === crumbs.length - 1
                        })}>{crumb}</li>
                        {index !== crumbs.length - 1 && <div className='px-1'>/</div>}
                    </Fragment>
                ))}
            </ol>}
        </>
    )
}

export default Breadcrumbs