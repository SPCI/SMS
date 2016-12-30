/**
 * Created by musbell on 12/4/16.
 */

import React from 'react'
import TableExampleSimple from '../table/table'
import Tab from '../tab/tab'


export default () => (
    <div>
        <div className="row">
            <div className="col-lg-12">
                <div className="box" style={{width: '100%', backgroundColor: '#64B5F6', height: 230}}>

                </div>
            </div>
            <div className="col-lg-12">
                <div className="box" style={{width: '100%', backgroundColor: 'white', height: 80}}>

                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-4">
                <div className="box" style={{position: 'relative', top: -225, left: 20}}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXEzeD////Ayt7Y3uv5+vz09fnFzuHw8vfd4u3L0+T3+PvT2ujl6vLP1ub29/vs7/Xi5vDSWJRLAAAFr0lEQVR4nO2dC5qrIAyFNSKKj9b9r/aiM622o61KIgcu/wo8XwIJIcQsSyQSiUQikUgkEhbKtO9PkIIoM23b1kPXdUPr+2u4IdJ9fS+VJZ8oje9P4sN6pWnrKn9liMVVR9MNXfMmL29q3x/Ggl13hXXMd3UW1ZLvj2PA9MO7Zz649cELJN1uyrMWNKELJF03a7754B64QNNuWy8ChWTq8os+GwrDVWjd87u+0YihLkRd7JE3ooIMh/QnbflEF1zSRro7oM/ShBb0i0/hYZ2gMlNz0IA/hOOpZI6swAUlBeKp/Tl9eTAZ+IklOEss8CWSi0BL4VvAV3ZH+S3Qg7+jBUc63xo+0rsLzHPk7Ub/KcCcAngtngr0f4ENGuS8yzwlgio0PD46UkHmqDSwCbRpuG81qzAKtEvRt5oV2FbhRIW3FPWuksx+et+C3qGWI9gvqHwreudo1eIrcCvRMDsp3nbKGAx/QbszbbkF5k30CtF2U95omBT6QEAhWLhICk8Qv5eCFTMEFNZYx4vobchXo4FVyH20yNGq3xIKsW5pRGwYvcL/YB0mG15KUpgUJoX+oZMtNAEpvPErBIsWAgrBbMheEIazoYDC+G0IppD9YgZOYfw7jYANwXaa+G0Yv8K005wAbB0mG54g2fBa0l56BqSqvumNhA1x1mFfKoGjRV73LUgjrUQVakQplO2U7jIKc5iG7/9AoZCXAimsxRSiPNU//+DwG0P0CkH2UkGFKEFfUKFvab/o6BWyvpZ5AaV5j5ifWgAqlMi7R2Ca2cXSNpgHCWJJzR3k9CTSmDiB86xb4LHFBErSxvRIHVrh2WEmX0B6vsb5BHim9C1rAcOwiBU6GCe1iLgpSkYzIhIvbkgmFDEiyvH3F/6AUaGkbA+433LD5KRPuB8C4803YZpN8wTOhNx1YbCNdII3/cZJSWeIVSFMDWoB6zUwUtL9hHUh4sWKjHnGEM7pfgnnVoPUpTDDqFAhHStmDF/eBjd+5wfNVzaFOvsu4NtqEHfSEbbjBcj1/QpcERExZZvgqmWA7qQjTNdsmFMTJ3iuaCBz0gcsM82ATZjxDADBq1+84L6dovRBbaFdNxuYm+0tyDX/xjxVLHEMirDBfoGbRHQfnXAq2EBHigcub/OV74/fhVMDke+P34fLDy58f/sujIMJw7ChU7up74/fhUu0CMJLnY5QYSh0Sr59f/0enBTi1qAWOCkEHKe/gkvjSRgKXdLSIBQ6NWUE8cdOpwuaIBQ61faD8FKnA3AICt2qwiF4qdt1Pr4NtemdkraqN9B1DKqr1b/DH0F1wBKZbtcwO00mmLpoga8PuZ4/wfop2w+RIFu+Rtjmm9xQFbI1s8MuxPgV8vW1IbbPZqwvSUGvgTm7oDEVcraXQnbuac6XT5CX+byvggBv85n/8AjzTn2G/dmTb0HvsD+xBHt8mLmVgddooNyU+pp/MkZVw+ynpAeZgQOqMwiualqBqZezyMKzIa17SuqbNA5t5s2S1A5So3deNFY1edGoC7lxiX9EDpefGMkMMsM+NukKfaEhKeuucM83yvoqjbq42Hwz3QUlf9K1N30WdRd2VjIyY1qOaCzlNJI2cqNYDzH0IiKp6Hzb74l1Vu40gKi9LvrtoipY0wBdSCdnJ7ixHT48b58faIaewY5E4sm1A+rufMAyMnPKGKlcRtPb7NNDdnaYqjip0a6/EPSNlKcCpJGbQy5Ac9SOpIPwzyU2eOy3I/b+uUm5O9HR3tPrs6hhl69eWJ3gp6q/aSTG8R1+aD7nOSjnIydsDrApEjUBPcp9vTRHWegOOqOGFYFaamS1H25/LiCD32HeUa//xiCWgRZgLKdPULAx/iOL1iru6aogqKcV29Cy7L2onwSHIrXgSDlJZBwkh8fUFR9DorZNKzUSH4Ymbh8did2EVqHvDxAnKQyfpDB84lf4D6/fZI5SIJLfAAAAAElFTkSuQmCC" alt=""/>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="box" style={{position: 'relative', top: -50}}>
                    <Tab/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="box" style={{marginTop: -220}}>
                    <TableExampleSimple/>
                </div>
            </div>
        </div>
    </div>
)