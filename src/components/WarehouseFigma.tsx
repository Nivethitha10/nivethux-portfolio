import { useState } from "react";
import type React from "react";
import "../warehouse-utilities.css";
import "./WarehouseFigma.css";

const assetPathPrefix = "/assets/warehouse-case-study";
const imgImageNivethUx = `${assetPathPrefix}/31352.png`;
const imgImageWarehouseOperationsInterfaceDisplayedOnARuggedZebraHandheld = `${assetPathPrefix}/2051b.png`;
const imgImage01InstantReplenishmentScan = `${assetPathPrefix}/b5f41.png`;
const imgImage02FastScanWithHoldCommit = `${assetPathPrefix}/34393.png`;
const imgImage03StrictlyGuardedBlockValidation = `${assetPathPrefix}/7b147.png`;
const imgImage01ScanMaterialLabel = `${assetPathPrefix}/89212.png`;
const imgImage02PrintProgress = `${assetPathPrefix}/06b39.png`;
const imgImage03LabelVerification = `${assetPathPrefix}/9fc30.png`;
const imgImage04SerialCollision = `${assetPathPrefix}/7f55c.png`;
const imgImage02EmptySuccess = `${assetPathPrefix}/d1c0a.png`;
const imgImage03WrongLineException = `${assetPathPrefix}/1147c.png`;
const imgImage01HighSpeedLoading = `${assetPathPrefix}/8738e.png`;
const imgImage02VerifyShipment = `${assetPathPrefix}/c3c25.png`;
const imgImage03HoldToCloseAction = `${assetPathPrefix}/0161e.png`;
const imgImage04RouteGuardBlock = `${assetPathPrefix}/6918f.png`;
const imgFigmaVariableCollectionsOriginalEvidence = `${assetPathPrefix}/2f416.png`;
const imgClientCollaborationFeedbackOriginalEvidence = `${assetPathPrefix}/5a249.png`;
const imgImage = `${assetPathPrefix}/244fe.png`;
const imgImage1 = `${assetPathPrefix}/13e56.png`;
const imgImage2 = `${assetPathPrefix}/fffc8.png`;
const imgImage3 = `${assetPathPrefix}/fd15c.png`;
const imgIcon = `${assetPathPrefix}/a7686.svg`;
const imgIcon1 = `${assetPathPrefix}/94078.svg`;
const imgImage19Vectorized = `${assetPathPrefix}/8e552.svg`;
const imgImage20Vectorized = `${assetPathPrefix}/695ee.svg`;
const imgImage21Vectorized = `${assetPathPrefix}/b24d9.svg`;
const imgImage22Vectorized = `${assetPathPrefix}/8b63a.svg`;
const imgImage23Vectorized = `${assetPathPrefix}/26521.svg`;
const imgImage24Vectorized = `${assetPathPrefix}/a7816.svg`;
const imgImage25Vectorized = `${assetPathPrefix}/55ee3.svg`;
const imgImage26Vectorized = `${assetPathPrefix}/39530.svg`;

export function WarehouseFigma() {
  const [preview, setPreview] = useState<string | null>(null);

  const handlePageClick = (event: React.MouseEvent<HTMLElement>) => {
    const image = (event.target as HTMLElement).closest<HTMLImageElement>("img");
    if (image && image.src.includes("/assets/warehouse-case-study/")) {
      setPreview(image.src);
    }
  };

  return (
    <main
      onClick={handlePageClick}
      className="case-study bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full"
      data-node-id="233:3534"
      data-name="Warehouse & Inventory UX Case Study | NivethUX"
    >
      <div
        className="bg-[#f8fafb] content-stretch flex flex-col items-start min-h-[861px] relative shrink-0 w-full"
        data-node-id="233:3535"
        data-name="Body"
      >
        <div
          className="bg-white border-[#f1f5f9] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full"
          data-node-id="233:3536"
          data-name="Header"
        >
          <div
            className="content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:3537"
            data-name="Container:margin"
          >
            <div
              className="content-stretch flex h-[80px] items-center justify-between max-w-[1280px] px-[80px] relative shrink-0 w-[1280px]"
              data-node-id="233:3538"
              data-name="Container"
            >
              <div
                className="content-stretch flex items-center relative shrink-0"
                data-node-id="233:3539"
                data-name="Link"
              >
                <div
                  className="h-[31.109px] relative shrink-0 w-[168px]"
                  data-node-id="233:3540"
                  data-name="Image (NivethUX)"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgImageNivethUx}
                  />
                </div>
              </div>
              <div
                className="content-stretch flex gap-[24px] items-center relative shrink-0"
                data-node-id="233:3541"
                data-name="Navigation - Main Navigation"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="233:3542"
                  data-name="List Item"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[21px] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap"
                    data-node-id="233:3543"
                  >
                    Home
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="233:3544"
                  data-name="List Item"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[21px] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap"
                    data-node-id="233:3545"
                  >
                    About Me
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="233:3546"
                  data-name="List Item"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[21px] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap"
                    data-node-id="233:3547"
                  >
                    Work
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="233:3548"
                  data-name="List Item"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[21px] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap"
                    data-node-id="233:3549"
                  >
                    Contact
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[12px] items-center relative shrink-0"
                data-node-id="233:3550"
                data-name="Container"
              >
                <div
                  className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[42px]"
                  data-node-id="233:3551"
                  data-name="Button - Switch to dark mode"
                >
                  <div
                    className="relative shrink-0 size-[18px]"
                    data-node-id="233:3552"
                    data-name="Icon"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgIcon}
                    />
                  </div>
                </div>
                <div
                  className="bg-[#008272] content-stretch drop-shadow-[0px_2px_4px_rgba(0,130,114,0.2)] flex gap-[8px] items-center px-[18px] py-[10px] relative rounded-[6px] shrink-0"
                  data-node-id="233:3554"
                  data-name="Link"
                >
                  <div
                    className="relative shrink-0 size-[16px]"
                    data-node-id="233:3555"
                    data-name="Icon"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgIcon1}
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:3559"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[21px] relative shrink-0 text-[14px] text-white whitespace-nowrap"
                      data-node-id="233:3560"
                    >
                      Download Resume
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full"
          data-node-id="233:3561"
          data-name="Main Content"
        >
          <div
            className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:3562"
            data-name="Section"
          >
            <div
              className="content-stretch flex flex-col items-start pt-[80px] relative shrink-0 w-[1120px]"
              data-node-id="233:3563"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-col h-[112px] items-start max-w-[1120px] pt-[55px] relative shrink-0 w-[1120px]"
                data-node-id="233:3564"
                data-name="Heading 1"
              >
                <p
                  className="[word-break:break-word] font-['Geist:ExtraBold'] font-extrabold leading-[56.16px] relative shrink-0 text-[#0f172a] text-[48px] tracking-[-1.536px] whitespace-nowrap"
                  data-node-id="233:3565"
                >{`Warehouse Management & Operations`}</p>
              </div>
              <div
                className="content-stretch flex flex-col items-start max-w-[1120px] pt-[20px] relative shrink-0 w-[1120px]"
                data-node-id="233:3566"
                data-name="Paragraph"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[28px] relative shrink-0 text-[#475569] text-[18px] w-[1120px]"
                  data-node-id="233:3567"
                >
                  Designing and delivering interfaces for warehouse inventory, replenishment and
                  dispatch workflows.
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[56px] relative shrink-0 w-full"
                data-node-id="233:3568"
                data-name="Container:margin"
              >
                <div
                  className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____214.40px_214.40px_214.40px_214.40px_214.40px] grid-rows-[_59px] h-[74px] relative shrink-0 w-full"
                  data-node-id="233:3569"
                  data-name="Container"
                >
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col gap-[4px] h-[74px] items-start justify-self-stretch min-h-[59px] px-[20px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0"
                    data-node-id="233:3570"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:3571"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[14px] relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap"
                        data-node-id="233:3572"
                      >
                        ROLE
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col h-[17px] items-start overflow-clip relative shrink-0 w-full"
                      data-node-id="233:3573"
                      data-name="Bold Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[17px] overflow-hidden relative shrink-0 text-[#0f172a] text-[13px] text-ellipsis w-full whitespace-nowrap"
                        data-node-id="233:3574"
                      >
                        UX Designer
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-3 content-stretch flex flex-col gap-[4px] items-start justify-center justify-self-stretch min-h-[59px] px-[20px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0"
                    data-node-id="233:3575"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:3576"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[14px] relative shrink-0 text-[#475569] text-[11px] uppercase whitespace-nowrap"
                        data-node-id="233:3577"
                      >
                        Platform
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                      data-node-id="233:3578"
                      data-name="Bold Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[17px] relative shrink-0 text-[#0f172a] text-[13px] w-full"
                        data-node-id="233:3579"
                      >
                        Zebra TC52 / TC57 Handheld Devices
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-4 content-stretch flex flex-col gap-[4px] h-[74px] items-start justify-self-stretch min-h-[59px] px-[20px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0"
                    data-node-id="233:3580"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:3581"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[14px] relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap"
                        data-node-id="233:3582"
                      >
                        Collaboration
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full"
                      data-node-id="233:3583"
                      data-name="Bold Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[17px] relative shrink-0 text-[#0f172a] text-[13px] w-full"
                        data-node-id="233:3584"
                      >
                        Client stakeholders and developers
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-5 content-stretch flex flex-col gap-[4px] h-[74px] items-start justify-self-stretch min-h-[59px] px-[20px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0"
                    data-node-id="233:3585"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:3586"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[14px] relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap"
                        data-node-id="233:3587"
                      >
                        Status
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col h-[17px] items-start overflow-clip relative shrink-0 w-full"
                      data-node-id="233:3588"
                      data-name="Bold Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[17px] relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap"
                        data-node-id="233:3589"
                      >
                        Implemented
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col gap-[4px] h-[74px] items-start justify-self-stretch min-h-[59px] px-[20px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0"
                    data-node-id="233:3590"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:3591"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[14px] relative shrink-0 text-[#475569] text-[11px] uppercase whitespace-nowrap"
                        data-node-id="233:3592"
                      >
                        Project
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col h-[17px] items-start overflow-clip relative shrink-0 w-full"
                      data-node-id="233:3593"
                      data-name="Bold Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[17px] relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap"
                        data-node-id="233:3594"
                      >
                        Enterprise · Client project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[56px] relative shrink-0 w-full"
                data-node-id="233:3595"
                data-name="Container:margin"
              >
                <div
                  className="grid grid-cols-[_1120px] grid-rows-[_800px] min-h-[800px] relative shrink-0 w-full"
                  data-node-id="233:3596"
                  data-name="Container"
                >
                  <div
                    className="bg-[#101820] border-8 border-[#111827] border-solid col-1 content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[685px] items-start justify-self-center pt-[24px] relative rounded-[30px] row-1 self-center shrink-0 w-[310px]"
                    data-node-id="233:3597"
                    data-name="Container"
                  >
                    <div
                      className="flex-[645_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[294px]"
                      data-node-id="233:3598"
                      data-name="Image (Warehouse operations interface displayed on a rugged Zebra handheld)"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                        src={imgImageWarehouseOperationsInterfaceDisplayedOnARuggedZebraHandheld}
                      />
                    </div>
                    <div
                      className="absolute bg-[#334155] h-[86px] left-[-10px] rounded-[4px] top-[100.34px] w-[5px]"
                      data-node-id="233:3599"
                      data-name="Text"
                    />
                    <div
                      className="absolute bg-[#334155] h-[86px] left-[299px] rounded-[4px] top-[100.34px] w-[5px]"
                      data-node-id="233:3600"
                      data-name="Text"
                    />
                    <div
                      className="absolute content-stretch flex gap-[8px] h-[24px] items-center justify-center left-0 top-0 w-[294px]"
                      data-node-id="233:3601"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[41px]"
                        data-node-id="233:3602"
                        data-name="Italic Text"
                      />
                      <div
                        className="bg-[#263d47] relative rounded-[2.5px] shrink-0 size-[5px]"
                        data-node-id="233:3603"
                        data-name="Bold Text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#e2e8f0] h-px relative shrink-0 w-full"
                data-node-id="233:3604"
                data-name="Container"
              />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[80px] relative shrink-0 w-full"
            data-node-id="233:3605"
            data-name="Section:margin"
          >
            <div
              className="bg-white content-start flex flex-wrap items-start justify-center relative shrink-0 w-full"
              data-node-id="233:3606"
              data-name="Section"
            >
              <div
                className="content-stretch flex flex-col items-start pb-[64px] pt-[80px] relative shrink-0 w-[1120px]"
                data-node-id="233:3607"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full"
                  data-node-id="233:3608"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:3609"
                    data-name="Heading 2"
                  >
                    <div
                      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0"
                      data-node-id="233:3610"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[14px] tracking-[2.8px] uppercase whitespace-nowrap"
                        data-node-id="233:3611"
                      >
                        Project Context
                      </p>
                      <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                        <span className="leading-[40px] text-[32px]">
                          An ongoing enterprise warehouse project
                        </span>
                      </li>
                    </div>
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[20px] items-start leading-[24px] relative shrink-0 text-[#475569] text-[16px] w-full"
                    data-node-id="233:3613"
                    data-name="Paragraph"
                  >
                    <p className="relative shrink-0 w-[603px]" data-node-id="233:3614">
                      The Warehouse Management System was an ongoing client project when I joined
                      the design team. The core workflows and business requirements had already been
                      documented, and an existing design system was in place.
                    </p>
                    <p className="relative shrink-0 w-[603px]" data-node-id="233:3615">
                      I reviewed the available design references and worked directly with the client
                      to understand how the application was expected to support warehouse
                      operations.
                    </p>
                    <p className="relative shrink-0 w-[603px]" data-node-id="233:3616">
                      My responsibility was to translate these requirements into functional
                      interfaces, refine the experience within the existing product framework, and
                      collaborate with stakeholders and developers through implementation.
                    </p>
                    <p className="relative shrink-0 w-[603px]" data-node-id="233:3617">
                      The work covered several warehouse operations, including Kanban replenishment,
                      truck dispatch and preserial stock creation.
                    </p>
                  </div>
                </div>
                <div
                  className="gap-y-[10px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] pt-[64px] relative shrink-0 w-full"
                  data-node-id="233:3618"
                  data-name="Container:margin"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center justify-self-stretch relative self-start shrink-0"
                    data-node-id="233:3619"
                    data-name="Container"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:3620"
                    >
                      01
                    </p>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="233:3621"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                        data-node-id="233:3622"
                      >
                        My Role and scope
                      </p>
                    </div>
                  </div>
                  <div
                    className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative self-start shrink-0 w-[1120px]"
                    data-node-id="233:3623"
                    data-name="Container"
                  >
                    <div
                      className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start justify-self-stretch p-[32px] relative rounded-[12px] self-stretch shrink-0"
                      data-node-id="233:3624"
                      data-name="Article"
                    >
                      <div
                        className="bg-[#f1f5f9] grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[10px] shrink-0 size-[48px]"
                        data-node-id="233:3625"
                        data-name="Container"
                      >
                        <div
                          className="aspect-[512/512] col-1 justify-self-stretch relative row-1 shrink-0"
                          data-node-id="233:3626"
                          data-name="image 19 [Vectorized]"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgImage19Vectorized}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col h-[48px] items-start pt-[20px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3637"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap"
                          data-node-id="233:3638"
                        >
                          Requirements
                        </p>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3639"
                        data-name="Paragraph"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[297px]"
                          data-node-id="233:3640"
                        >
                          Worked from documented requirements and clarified expectations with the
                          client
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start justify-self-stretch p-[32px] relative rounded-[12px] self-stretch shrink-0"
                      data-node-id="233:3641"
                      data-name="Article"
                    >
                      <div
                        className="bg-[#f1f5f9] grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[10px] shrink-0 size-[48px]"
                        data-node-id="233:3642"
                        data-name="Container"
                      >
                        <div
                          className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]"
                          data-node-id="233:3643"
                          data-name="image 20 [Vectorized]"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgImage20Vectorized}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col h-[48px] items-start pt-[20px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3650"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap"
                          data-node-id="233:3651"
                        >
                          Product direction
                        </p>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3652"
                        data-name="Paragraph"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[297px]"
                          data-node-id="233:3653"
                        >
                          Inherited established workflows and product direction
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start justify-self-stretch p-[32px] relative rounded-[12px] self-stretch shrink-0"
                      data-node-id="233:3654"
                      data-name="Article"
                    >
                      <div
                        className="bg-[#f1f5f9] grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[10px] shrink-0 size-[48px]"
                        data-node-id="233:3655"
                        data-name="Container"
                      >
                        <div
                          className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]"
                          data-node-id="233:3656"
                          data-name="image 21 [Vectorized]"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgImage21Vectorized}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col h-[48px] items-start pt-[20px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3659"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap"
                          data-node-id="233:3660"
                        >
                          Interface design
                        </p>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3661"
                        data-name="Paragraph"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[297px]"
                          data-node-id="233:3662"
                        >
                          Designed screens for assigned warehouse workflows
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start justify-self-stretch p-[32px] relative rounded-[12px] self-stretch shrink-0"
                      data-node-id="233:3663"
                      data-name="Article"
                    >
                      <div
                        className="bg-[#f1f5f9] grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[10px] shrink-0 size-[48px]"
                        data-node-id="233:3664"
                        data-name="Container"
                      >
                        <div
                          className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]"
                          data-node-id="233:3665"
                          data-name="image 22 [Vectorized]"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgImage22Vectorized}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col h-[48px] items-start pt-[20px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3669"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap"
                          data-node-id="233:3670"
                        >
                          Design system
                        </p>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3671"
                        data-name="Paragraph"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[297px]"
                          data-node-id="233:3672"
                        >
                          Introduced variables and tokens across the existing system
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start justify-self-stretch p-[32px] relative rounded-[12px] self-stretch shrink-0"
                      data-node-id="233:3673"
                      data-name="Article"
                    >
                      <div
                        className="bg-[#f1f5f9] grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[10px] shrink-0 size-[48px]"
                        data-node-id="233:3674"
                        data-name="Container"
                      >
                        <div
                          className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]"
                          data-node-id="233:3675"
                          data-name="image 23 [Vectorized]"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgImage23Vectorized}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col h-[48px] items-start pt-[20px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3680"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap"
                          data-node-id="233:3681"
                        >
                          Collaboration
                        </p>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3682"
                        data-name="Paragraph"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[297px]"
                          data-node-id="233:3683"
                        >
                          Worked directly with stakeholders and developers
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start justify-self-stretch p-[32px] relative rounded-[12px] self-stretch shrink-0"
                      data-node-id="233:3684"
                      data-name="Article"
                    >
                      <div
                        className="bg-[#f1f5f9] grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[10px] shrink-0 size-[48px]"
                        data-node-id="233:3685"
                        data-name="Container"
                      >
                        <div
                          className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]"
                          data-node-id="233:3686"
                          data-name="image 24 [Vectorized]"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgImage24Vectorized}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col h-[48px] items-start pt-[20px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3691"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap"
                          data-node-id="233:3692"
                        >
                          Implementation
                        </p>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-[296.664px]"
                        data-node-id="233:3693"
                        data-name="Paragraph"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[297px]"
                          data-node-id="233:3694"
                        >
                          Delivered designs that were implemented
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[64px] relative shrink-0 w-full"
                  data-node-id="233:3695"
                  data-name="Container:margin"
                >
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start p-[28px] relative rounded-[12px] shrink-0 w-full"
                    data-node-id="233:3696"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:3697"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap"
                        data-node-id="233:3698"
                      >
                        3 of 8 Designed Core Workflows
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full"
                      data-node-id="233:3699"
                      data-name="Container:margin"
                    >
                      <div
                        className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full"
                        data-node-id="233:3700"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col gap-[7px] h-[51px] items-start relative shrink-0 w-[327.328px]"
                          data-node-id="233:3701"
                          data-name="Article"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                            data-node-id="233:3702"
                            data-name="Bold Text"
                          >
                            <p
                              className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#475569] text-[16px] whitespace-nowrap"
                              data-node-id="233:3703"
                            >
                              01 - Preserial Create
                            </p>
                          </div>
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                            data-node-id="233:3704"
                            data-name="Paragraph"
                          >
                            <p
                              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap"
                              data-node-id="233:3705"
                            >
                              Serial label generation and verification.
                            </p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[7px] h-[51px] items-start relative shrink-0 w-[327.336px]"
                          data-node-id="233:3706"
                          data-name="Article"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                            data-node-id="233:3707"
                            data-name="Bold Text"
                          >
                            <p
                              className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#475569] text-[16px] whitespace-nowrap"
                              data-node-id="233:3708"
                            >
                              02 - Kanban Classic
                            </p>
                          </div>
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                            data-node-id="233:3709"
                            data-name="Paragraph"
                          >
                            <p
                              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap"
                              data-node-id="233:3710"
                            >
                              Production-line material replenishment.
                            </p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[7px] h-[51px] items-start relative shrink-0 w-[327.336px]"
                          data-node-id="233:3711"
                          data-name="Article"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                            data-node-id="233:3712"
                            data-name="Bold Text"
                          >
                            <p
                              className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#475569] text-[16px] whitespace-nowrap"
                              data-node-id="233:3713"
                            >
                              03 - Close Truck
                            </p>
                          </div>
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                            data-node-id="233:3714"
                            data-name="Paragraph"
                          >
                            <p
                              className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap"
                              data-node-id="233:3715"
                            >
                              Outbound shipment verification and closure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[64px] relative shrink-0 w-full"
                  data-node-id="233:3716"
                  data-name="Container:margin"
                >
                  <div
                    className="bg-[#e2e8f0] h-px relative shrink-0 w-[1120px]"
                    data-node-id="233:3717"
                    data-name="Container"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:3718"
            data-name="Section"
          >
            <div
              className="content-stretch flex flex-col items-start pb-[60px] pt-[80px] relative shrink-0 w-[1120px]"
              data-node-id="233:3719"
              data-name="Container"
            >
              <div
                className="h-[24px] relative shrink-0 w-full"
                data-node-id="233:3720"
                data-name="Container"
              >
                <p
                  className="[word-break:break-word] absolute font-['Geist:SemiBold'] font-[650] leading-[18px] left-0 text-[#2563eb] text-[14px] top-[3.5px] tracking-[2.8px] uppercase whitespace-nowrap"
                  data-node-id="233:3721"
                >
                  Understanding the workflows
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-full"
                data-node-id="233:3722"
                data-name="Heading 2"
              >
                <p
                  className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[40px] relative shrink-0 text-[#0f172a] text-[32px] tracking-[-0.64px] whitespace-nowrap"
                  data-node-id="233:3723"
                >
                  Three operations. Three different points in the material lifecycle.
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                data-node-id="233:3724"
                data-name="Paragraph:margin"
              >
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#475569] text-[16px] w-[940px]"
                  data-node-id="233:3725"
                >
                  The WMS supports different stages of warehouse operations — from preparing
                  traceable inventory to replenishing production lines and dispatching loaded
                  shipments. Each workflow has a distinct operational goal and set of validations.
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
                data-node-id="233:3726"
                data-name="Container:margin"
              >
                <div
                  className="gap-x-[40px] gap-y-[40px] grid grid-cols-[___346.66px_346.66px_346.66px] grid-rows-[_104px] relative shrink-0 w-full"
                  data-node-id="233:3727"
                  data-name="Container"
                >
                  <div
                    className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0"
                    data-node-id="233:3728"
                    data-name="Article"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[16.5px] relative shrink-0 text-[#2563eb] text-[11px] tracking-[1.1px] whitespace-nowrap"
                      data-node-id="233:3729"
                    >
                      Preapre
                    </p>
                    <div
                      className="content-stretch flex flex-col h-[32px] items-start pt-[8px] relative shrink-0 w-[346.664px]"
                      data-node-id="233:3730"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap"
                        data-node-id="233:3731"
                      >
                        01. Preserial Stock Creation
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[346.664px]"
                      data-node-id="233:3732"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[347px]"
                        data-node-id="233:3733"
                      >
                        Generate, print and verify serialized labels.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0"
                    data-node-id="233:3734"
                    data-name="Article"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[16.5px] relative shrink-0 text-[#2563eb] text-[11px] tracking-[1.1px] whitespace-nowrap"
                      data-node-id="233:3735"
                    >
                      Replenish
                    </p>
                    <div
                      className="content-stretch flex flex-col h-[32px] items-start pt-[8px] relative shrink-0 w-[346.664px]"
                      data-node-id="233:3736"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap"
                        data-node-id="233:3737"
                      >
                        02. Kanban Classic
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[346.664px]"
                      data-node-id="233:3738"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[347px]"
                        data-node-id="233:3739"
                      >
                        Trigger material replenishment for production.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0"
                    data-node-id="233:3740"
                    data-name="Article"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[16.5px] relative shrink-0 text-[#2563eb] text-[11px] tracking-[1.1px] whitespace-nowrap"
                      data-node-id="233:3741"
                    >
                      Dispatch
                    </p>
                    <div
                      className="content-stretch flex flex-col h-[32px] items-start pt-[8px] relative shrink-0 w-[346.664px]"
                      data-node-id="233:3742"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap"
                        data-node-id="233:3743"
                      >
                        03. Close Truck
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[346.664px]"
                      data-node-id="233:3744"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#475569] text-[14px] w-[347px]"
                        data-node-id="233:3745"
                      >
                        Verify loaded pallets before closing a shipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full"
                data-node-id="233:3746"
                data-name="Container:margin"
              >
                <div
                  className="gap-x-[22px] gap-y-[22px] grid grid-cols-[___358.66px_358.66px_358.66px] grid-rows-[_516px] relative shrink-0 w-full"
                  data-node-id="233:3747"
                  data-name="Container"
                >
                  <div
                    className="col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                    data-node-id="233:3748"
                    data-name="Figure"
                  >
                    <div
                      className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[484px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[220px]"
                      data-node-id="233:3749"
                      data-name="Container"
                    >
                      <div
                        className="flex-[451_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[206px]"
                        data-node-id="233:3750"
                        data-name="Image (01. Instant replenishment scan)"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                          src={imgImage01InstantReplenishmentScan}
                        />
                      </div>
                      <div
                        className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[70.5px] w-[5px]"
                        data-node-id="233:3751"
                        data-name="Text"
                      />
                      <div
                        className="absolute bg-[#334155] h-[70px] left-[211px] rounded-[4px] top-[70.5px] w-[5px]"
                        data-node-id="233:3752"
                        data-name="Text"
                      />
                      <div
                        className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[206px]"
                        data-node-id="233:3753"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                          data-node-id="233:3754"
                          data-name="Italic Text"
                        />
                        <div
                          className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                          data-node-id="233:3755"
                          data-name="Bold Text"
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                      data-node-id="233:3756"
                      data-name="Figcaption:margin"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                        data-node-id="233:3757"
                      >
                        02. Instant replenishment scan
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-3 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                    data-node-id="233:3758"
                    data-name="Figure"
                  >
                    <div
                      className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[484px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[220px]"
                      data-node-id="233:3759"
                      data-name="Container"
                    >
                      <div
                        className="flex-[451_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[206px]"
                        data-node-id="233:3760"
                        data-name="Image (02. Fast scan with hold-commit)"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                          src={imgImage02FastScanWithHoldCommit}
                        />
                      </div>
                      <div
                        className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[70.5px] w-[5px]"
                        data-node-id="233:3761"
                        data-name="Text"
                      />
                      <div
                        className="absolute bg-[#334155] h-[70px] left-[211px] rounded-[4px] top-[70.5px] w-[5px]"
                        data-node-id="233:3762"
                        data-name="Text"
                      />
                      <div
                        className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[206px]"
                        data-node-id="233:3763"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                          data-node-id="233:3764"
                          data-name="Italic Text"
                        />
                        <div
                          className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                          data-node-id="233:3765"
                          data-name="Bold Text"
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                      data-node-id="233:3766"
                      data-name="Figcaption:margin"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                        data-node-id="233:3767"
                      >
                        03. Fast scan with hold-commit
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-1 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                    data-node-id="233:3768"
                    data-name="Figure"
                  >
                    <div
                      className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[484px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[220px]"
                      data-node-id="233:3769"
                      data-name="Container"
                    >
                      <div
                        className="flex-[451_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[206px]"
                        data-node-id="233:3770"
                        data-name="Image (03. Strictly guarded block validation)"
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                          src={imgImage03StrictlyGuardedBlockValidation}
                        />
                      </div>
                      <div
                        className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[70.5px] w-[5px]"
                        data-node-id="233:3771"
                        data-name="Text"
                      />
                      <div
                        className="absolute bg-[#334155] h-[70px] left-[211px] rounded-[4px] top-[70.5px] w-[5px]"
                        data-node-id="233:3772"
                        data-name="Text"
                      />
                      <div
                        className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[206px]"
                        data-node-id="233:3773"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                          data-node-id="233:3774"
                          data-name="Italic Text"
                        />
                        <div
                          className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                          data-node-id="233:3775"
                          data-name="Bold Text"
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                      data-node-id="233:3776"
                      data-name="Figcaption:margin"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                        data-node-id="233:3777"
                      >
                        01. Strictly guarded block validation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#e2e8f0] h-px relative shrink-0 w-full"
                data-node-id="233:3778"
                data-name="Container"
              />
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:3779"
            data-name="Section"
          >
            <div
              className="content-stretch flex flex-col gap-[48px] items-start pb-[80px] pt-[64px] relative shrink-0 w-[1120px]"
              data-node-id="233:3780"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="233:3781"
                data-name="Header"
              >
                <div
                  className="bg-[#e2e8f0] h-px relative shrink-0 w-full"
                  data-node-id="233:3782"
                  data-name="Container"
                />
                <div
                  className="content-stretch flex flex-col items-start pt-[30px] relative shrink-0 w-full"
                  data-node-id="233:3783"
                  data-name="Heading 2:margin"
                >
                  <div
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] h-[42px] leading-[42px] relative shrink-0 text-[32px] tracking-[-0.64px] w-full whitespace-nowrap"
                    data-node-id="233:3784"
                    data-name="Heading 2"
                  >
                    <p className="absolute left-0 text-[#2563eb] top-0" data-node-id="233:3785">
                      01
                    </p>
                    <p
                      className="absolute left-[48.69px] text-[#0f172a] top-0"
                      data-node-id="233:3786"
                    >
                      Preserial Stock Creation
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0"
                  data-node-id="233:3787"
                >
                  <div
                    className="content-stretch flex flex-col h-[36px] items-start pt-[12px] relative shrink-0 w-[1120px]"
                    data-node-id="233:3788"
                    data-name="Paragraph"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#475569] text-[16px] whitespace-nowrap"
                      data-node-id="233:3789"
                    >
                      Serial label generation and verification
                    </p>
                  </div>
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#64748b] text-[15px] w-[980px]"
                    data-node-id="233:3790"
                  >
                    The Preserial Stock Creation workflow supports the generation and printing of
                    serialized labels for physical components. It connects material identification,
                    serial label generation, printing and physical label verification within one
                    workflow.
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[1120px]"
                data-node-id="233:3791"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                  data-node-id="233:3792"
                  data-name="Container"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                    data-node-id="233:3793"
                  >
                    01
                  </p>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:3794"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:3795"
                    >
                      Operational Context
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-full"
                  data-node-id="233:3796"
                  data-name="Article:margin"
                >
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[32px] py-[28px] relative rounded-[12px] shrink-0 w-full"
                    data-node-id="233:3797"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:3798"
                      data-name="Heading 3"
                    >
                      <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                        <span className="leading-[28px] text-[20px]">
                          Preparing serialized labels for physical components
                        </span>
                      </li>
                    </div>
                    <div
                      className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[15px] items-start leading-[23px] pt-[20px] relative shrink-0 text-[#64748b] text-[15px]"
                      data-node-id="233:3800"
                      data-name="Paragraph:margin"
                    >
                      <p className="relative shrink-0 w-[980px]" data-node-id="233:3801">
                        Serialized labels provide identifiable information that can be associated
                        with physical components.
                      </p>
                      <p className="relative shrink-0 w-[980px]" data-node-id="233:3802">
                        The workflow needs to capture the correct material information, generate the
                        required serial labels and provide a way to verify that the printed labels
                        can be scanned successfully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col h-[662px] items-start relative shrink-0 w-[1120px]"
                data-node-id="233:3803"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                  data-node-id="233:3804"
                  data-name="Container"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                    data-node-id="233:3805"
                  >
                    02
                  </p>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:3806"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:3807"
                    >
                      Core Flow Progression
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
                  data-node-id="233:3808"
                  data-name="Container:margin"
                >
                  <div
                    className="gap-x-[18px] gap-y-[18px] grid grid-cols-[____266.50px_266.50px_266.50px_266.50px] grid-rows-[_582px] relative shrink-0 w-full"
                    data-node-id="233:3809"
                    data-name="Container"
                  >
                    <div
                      className="col-1 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:3810"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:3811"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:3812"
                          data-name="Image (01. Scan Material Label)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage01ScanMaterialLabel}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3813"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3814"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:3815"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:3816"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:3817"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:3818"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:3819"
                        >
                          01. Scan Material Label
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:3820"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:3821"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:3822"
                          data-name="Image (02. Print Progress)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage02PrintProgress}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3823"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3824"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:3825"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:3826"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:3827"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:3828"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:3829"
                        >
                          02. Print Progress
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-3 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:3830"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:3831"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:3832"
                          data-name="Image (03. Label Verification)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage03LabelVerification}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3833"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3834"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:3835"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:3836"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:3837"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:3838"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:3839"
                        >
                          03. Label Verification
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-4 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:3840"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:3841"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:3842"
                          data-name="Image (04. Serial Collision)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage04SerialCollision}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3843"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3844"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:3845"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:3846"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:3847"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:3848"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:3849"
                        >
                          04. Serial Collision
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full"
                data-node-id="233:3850"
              >
                <div
                  className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-full"
                  data-node-id="233:3851"
                  data-name="Article"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                    data-node-id="233:3852"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:3853"
                    >
                      03
                    </p>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="233:3854"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                        data-node-id="233:3855"
                      >
                        Interaction Decision
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-[492px]"
                    data-node-id="233:3856"
                    data-name="Heading 4"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] whitespace-nowrap"
                      data-node-id="233:3857"
                    >{`Separating Label Generation From Physical Verification `}</p>
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[10px] items-start leading-[22px] pt-[15px] relative shrink-0 text-[#64748b] text-[14px] w-full"
                    data-node-id="233:3858"
                    data-name="Paragraph"
                  >
                    <p className="relative shrink-0 w-full" data-node-id="233:3859">
                      Generating a serial label and verifying its physical print are two different
                      stages.
                    </p>
                    <p className="relative shrink-0 w-full" data-node-id="233:3860">
                      The workflow makes this distinction visible by presenting printing progress
                      separately from the subsequent verification process. This helps operators
                      understand which labels have been printed and which have been verified.
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="233:3861"
                  data-name="Container:margin"
                >
                  <div
                    className="bg-[#eff6ff] border border-[#2563eb] border-solid content-stretch flex flex-col items-start px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-full"
                    data-node-id="233:3862"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="233:3863"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                        data-node-id="233:3864"
                      >
                        05
                      </p>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="233:3865"
                        data-name="Text"
                      >
                        <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                          <span className="leading-[18px] text-[12px]">
                            Validation and Exception Handling
                          </span>
                        </li>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[16px] items-start pt-[21px] relative shrink-0 w-[1062px]"
                      data-node-id="233:3867"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#dbeafe] grid grid-cols-[_42px] grid-rows-[_42px] relative rounded-[10px] shrink-0 size-[42px]"
                        data-node-id="233:3868"
                        data-name="Text"
                      >
                        <div
                          className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]"
                          data-node-id="233:3869"
                          data-name="image 25 [Vectorized]"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgImage25Vectorized}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-[960px]"
                        data-node-id="233:3872"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                          data-node-id="233:3873"
                          data-name="Heading 3"
                        >
                          <p
                            className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] whitespace-nowrap"
                            data-node-id="233:3874"
                          >
                            Making Verification Process Visible
                          </p>
                        </div>
                        <div
                          className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[10px] items-start leading-[22px] max-w-[960px] pt-[15px] relative shrink-0 text-[#64748b] text-[14px] w-[960px]"
                          data-node-id="233:3875"
                          data-name="Paragraph"
                        >
                          <p className="relative shrink-0 w-[960px]" data-node-id="233:3876">
                            The verification interface shows the number of labels scanned and the
                            serials successfully verified.
                          </p>
                          <p className="relative shrink-0 w-[960px]" data-node-id="233:3877">
                            This makes the progress of the verification batch visible rather than
                            treating label generation and verification as a single completed action.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:3878"
            data-name="Section"
          >
            <div
              className="content-stretch flex flex-col gap-[48px] items-start pb-[80px] pt-[64px] relative shrink-0 w-[1120px]"
              data-node-id="233:3879"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="233:3880"
                data-name="Header"
              >
                <div
                  className="bg-[#e2e8f0] h-px relative shrink-0 w-full"
                  data-node-id="233:3881"
                  data-name="Container"
                />
                <div
                  className="content-stretch flex flex-col items-start pt-[30px] relative shrink-0 w-full"
                  data-node-id="233:3882"
                  data-name="Heading 2:margin"
                >
                  <div
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] h-[42px] leading-[42px] relative shrink-0 text-[32px] tracking-[-0.64px] w-full whitespace-nowrap"
                    data-node-id="233:3883"
                    data-name="Heading 2"
                  >
                    <p className="absolute left-0 text-[#2563eb] top-0" data-node-id="233:3884">
                      02
                    </p>
                    <p
                      className="absolute left-[54.94px] text-[#0f172a] top-0"
                      data-node-id="233:3885"
                    >
                      Component Kanban Classic
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col h-[36px] items-start pt-[12px] relative shrink-0 w-[1120px]"
                  data-node-id="233:3886"
                  data-name="Paragraph"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap"
                    data-node-id="233:3887"
                  >
                    Production-line material replenishment
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[1120px]"
                data-node-id="233:3888"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                  data-node-id="233:3889"
                  data-name="Container"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                    data-node-id="233:3890"
                  >
                    01
                  </p>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:3891"
                    data-name="Text"
                  >
                    <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                      <span className="leading-[18px] text-[12px]">Operational context</span>
                    </li>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-full"
                  data-node-id="233:3893"
                  data-name="Article:margin"
                >
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[32px] py-[28px] relative rounded-[12px] shrink-0 w-full"
                    data-node-id="233:3894"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:3895"
                      data-name="Heading 3"
                    >
                      <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                        <span className="leading-[28px] text-[20px]">
                          Replenishment depends on the correct Kanban card
                        </span>
                      </li>
                    </div>
                    <div
                      className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[10px] items-start leading-[23px] pt-[20px] relative shrink-0 text-[#64748b] text-[15px]"
                      data-node-id="233:3897"
                      data-name="Paragraph:margin"
                    >
                      <p className="relative shrink-0 w-[980px]" data-node-id="233:3898">
                        Production operators need to identify the material requiring replenishment
                        without navigating through lengthy forms or manual data entry.
                      </p>
                      <p className="relative shrink-0 w-[980px]" data-node-id="233:3899">
                        The interface needs to make the scanning action straightforward while
                        ensuring that a card associated with another work centre is not processed
                        incorrectly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col h-[662px] items-start relative shrink-0 w-[1120px]"
                data-node-id="233:3900"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                  data-node-id="233:3901"
                  data-name="Container"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                    data-node-id="233:3902"
                  >
                    02
                  </p>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:3903"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:3904"
                    >
                      Core Flow Progression
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
                  data-node-id="233:3905"
                  data-name="Container:margin"
                >
                  <div
                    className="gap-x-[22px] gap-y-[22px] grid grid-cols-[___358.66px_358.66px_358.66px] grid-rows-[_582px] relative shrink-0 w-full"
                    data-node-id="233:3906"
                    data-name="Container"
                  >
                    <div
                      className="col-1 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:3907"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:3908"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:3909"
                          data-name="Image (01. Initial Scan Prompt)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage01InstantReplenishmentScan}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3910"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3911"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:3912"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:3913"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:3914"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:3915"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:3916"
                        >
                          01. Initial Scan Prompt
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:3917"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:3918"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:3919"
                          data-name="Image (02. Empty Success)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage02EmptySuccess}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3920"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3921"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:3922"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:3923"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:3924"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:3925"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:3926"
                        >
                          02. Empty Success
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-3 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:3927"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:3928"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:3929"
                          data-name="Image (03. Wrong Line Exception)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage03WrongLineException}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3930"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:3931"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:3932"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:3933"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:3934"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:3935"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:3936"
                        >
                          03. Wrong Line Exception
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full"
                data-node-id="233:3937"
              >
                <div
                  className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-full"
                  data-node-id="233:3938"
                  data-name="Article"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                    data-node-id="233:3939"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:3940"
                    >
                      03
                    </p>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="233:3941"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                        data-node-id="233:3942"
                      >
                        Interaction Decision
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-[492px]"
                    data-node-id="233:3943"
                    data-name="Heading 4"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] whitespace-nowrap"
                      data-node-id="233:3944"
                    >
                      A Scan-first Interaction
                    </p>
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[10px] items-start leading-[22px] pt-[15px] relative shrink-0 text-[#64748b] text-[14px] w-full"
                    data-node-id="233:3945"
                    data-name="Paragraph"
                  >
                    <p className="relative shrink-0 w-full" data-node-id="233:3946">
                      The workflow uses barcode scanning as its primary interaction. Rather than
                      requiring the operator to enter card information manually, the scan supplies
                      the information needed to identify the Kanban card.
                    </p>
                    <p className="relative shrink-0 w-full" data-node-id="233:3947">
                      The interface communicates the result through distinct success and error
                      states, keeping the next action clear.
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="233:3948"
                  data-name="Container:margin"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="233:3949"
                    data-name="Container"
                  >
                    <div
                      className="bg-white border-[#a855f7] border-b border-l-3 border-r border-solid border-t content-stretch flex flex-col items-start px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-full"
                      data-node-id="233:3950"
                      data-name="Article"
                    >
                      <div
                        className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                        data-node-id="233:3951"
                        data-name="Text"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#0d9488] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                          data-node-id="233:3952"
                        >
                          04
                        </p>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="233:3953"
                          data-name="Text"
                        >
                          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                            <span className="leading-[18px] text-[12px]">Scanner Feedback</span>
                          </li>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-[492px]"
                        data-node-id="233:3955"
                        data-name="Heading 3"
                      >
                        <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                          <span className="leading-[24px] text-[17px]">
                            Reinforcing successful barcode scans
                          </span>
                        </li>
                      </div>
                      <div
                        className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[10px] items-start max-w-[960px] pt-[15px] relative shrink-0 text-[#475569] text-[14px] w-[960px]"
                        data-node-id="233:3957"
                        data-name="Paragraph"
                      >
                        <p
                          className="leading-[22px] relative shrink-0 w-[960px]"
                          data-node-id="233:3958"
                        >
                          The scanning interaction was supported by three feedback channels on the
                          Zebra TC52/TC57 handheld device:
                        </p>
                        <ul
                          className="block leading-[0] list-disc relative shrink-0 w-[960px]"
                          data-node-id="233:3959"
                        >
                          <li className="leading-[22px] mb-0 ms-[21px]">
                            <span className="[word-break:break-word] font-['Geist:Bold'] font-bold">
                              Audio:
                            </span>
                            {` A beep provides audible confirmation.`}
                          </li>
                          <li className="leading-[22px] mb-0 ms-[21px]">
                            <span className="[word-break:break-word] font-['Geist:Bold'] font-bold">
                              Haptic:
                            </span>
                            {` Vibration provides tactile feedback.`}
                          </li>
                          <li className="leading-[22px] ms-[21px]">
                            <span className="[word-break:break-word] font-['Geist:Bold'] font-bold">
                              LED:
                            </span>
                            {` A visual indicator confirms the scan.`}
                          </li>
                        </ul>
                        <p
                          className="leading-[22px] relative shrink-0 w-[960px]"
                          data-node-id="233:3960"
                        >
                          These feedback channels help operators recognise successful barcode
                          capture without relying exclusively on the application screen.
                        </p>
                        <p
                          className="leading-[22px] relative shrink-0 w-[960px]"
                          data-node-id="233:3961"
                        >
                          The application then communicates the operational result through its
                          interface, distinguishing successful replenishment from validation errors
                          such as a Kanban card assigned to another work centre.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="233:3962"
                  data-name="Container:margin"
                >
                  <div
                    className="bg-[#eff6ff] border border-[#2563eb] border-solid content-stretch flex flex-col items-start px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-full"
                    data-node-id="233:3963"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="233:3964"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                        data-node-id="233:3965"
                      >
                        05
                      </p>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="233:3966"
                        data-name="Text"
                      >
                        <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                          <span className="leading-[18px] text-[12px]">
                            Validation and Recovery
                          </span>
                        </li>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[16px] items-start pt-[21px] relative shrink-0 w-[1062px]"
                      data-node-id="233:3968"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#dbeafe] grid grid-cols-[_42px] grid-rows-[_42px] relative rounded-[10px] shrink-0 size-[42px]"
                        data-node-id="233:3969"
                        data-name="Text"
                      >
                        <div
                          className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]"
                          data-node-id="233:3970"
                          data-name="image 26 [Vectorized]"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgImage26Vectorized}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-[960px]"
                        data-node-id="233:3975"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                          data-node-id="233:3976"
                          data-name="Heading 3"
                        >
                          <p
                            className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] whitespace-nowrap"
                            data-node-id="233:3977"
                          >
                            Preventing Incorrect Work-centre Assignments
                          </p>
                        </div>
                        <div
                          className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[10px] items-start leading-[22px] max-w-[960px] pt-[15px] relative shrink-0 text-[#475569] text-[14px] w-[960px]"
                          data-node-id="233:3978"
                          data-name="Paragraph"
                        >
                          <p className="relative shrink-0 w-[960px]" data-node-id="233:3979">
                            A recognised barcode does not automatically mean that the operation is
                            valid. The scanned card must also belong to the expected work centre.
                          </p>
                          <p
                            className="relative shrink-0 w-[960px]"
                            data-node-id="233:3980"
                          >{`The wrong-line state makes the discrepancy visible by showing the scanned card's assigned line alongside the current line, with clear next actions.`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:3981"
            data-name="Section"
          >
            <div
              className="content-stretch flex flex-col gap-[48px] items-start pb-[80px] pt-[64px] relative shrink-0 w-[1120px]"
              data-node-id="233:3982"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="233:3983"
                data-name="Header"
              >
                <div
                  className="bg-[#e2e8f0] h-px relative shrink-0 w-full"
                  data-node-id="233:3984"
                  data-name="Container"
                />
                <div
                  className="content-stretch flex flex-col items-start pt-[30px] relative shrink-0 w-full"
                  data-node-id="233:3985"
                  data-name="Heading 2:margin"
                >
                  <div
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] h-[42px] leading-[42px] relative shrink-0 text-[32px] tracking-[-0.64px] w-full whitespace-nowrap"
                    data-node-id="233:3986"
                    data-name="Heading 2"
                  >
                    <p className="absolute left-0 text-[#2563eb] top-0" data-node-id="233:3987">
                      03
                    </p>
                    <p
                      className="absolute left-[55.8px] text-[#0f172a] top-0"
                      data-node-id="233:3988"
                    >
                      Close Truck Dispatch
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0"
                  data-node-id="233:3989"
                >
                  <div
                    className="content-stretch flex flex-col h-[36px] items-start pt-[10px] relative shrink-0 w-[1120px]"
                    data-node-id="233:3990"
                    data-name="Paragraph"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[#475569] text-[16px] whitespace-nowrap"
                      data-node-id="233:3991"
                    >
                      Outbound Shipment Verification
                    </p>
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[15px] items-start leading-[23px] relative shrink-0 text-[#64748b] text-[15px]"
                    data-node-id="233:3992"
                  >
                    <p className="relative shrink-0 w-[980px]" data-node-id="233:3993">
                      The Close Truck workflow supports outbound shipment preparation by allowing
                      dock coordinators to scan loaded pallets, track loading progress and review
                      shipment information before completing the truck-closing operation.
                    </p>
                    <p className="relative shrink-0 w-[980px]" data-node-id="233:3994">
                      The interface needs to make shipment progress visible while helping operators
                      identify incorrect pallet assignments before dispatch.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[1120px]"
                data-node-id="233:3995"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                  data-node-id="233:3996"
                  data-name="Container"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                    data-node-id="233:3997"
                  >
                    01
                  </p>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:3998"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:3999"
                    >
                      Operational Context
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[18px] relative shrink-0 w-full"
                  data-node-id="233:4000"
                  data-name="Article:margin"
                >
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[32px] py-[28px] relative rounded-[12px] shrink-0 w-full"
                    data-node-id="233:4001"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="233:4002"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap"
                        data-node-id="233:4003"
                      >
                        Keep Shipment Loading Accurate
                      </p>
                    </div>
                    <div
                      className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[15px] items-start leading-[23px] pt-[20px] relative shrink-0 text-[#64748b] text-[15px]"
                      data-node-id="233:4004"
                      data-name="Paragraph:margin"
                    >
                      <p className="relative shrink-0 w-[980px]" data-node-id="233:4005">
                        Dock coordinators need to process multiple pallet identifiers during loading
                        while maintaining an accurate view of the shipment.
                      </p>
                      <p className="relative shrink-0 w-[980px]" data-node-id="233:4006">
                        The workflow brings together pallet scanning, loading progress, shipment
                        details and final confirmation within one operational sequence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[1120px]"
                data-node-id="233:4007"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                  data-node-id="233:4008"
                  data-name="Container"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                    data-node-id="233:4009"
                  >
                    02
                  </p>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:4010"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:4011"
                    >
                      Core Flow Progression
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
                  data-node-id="233:4012"
                  data-name="Container:margin"
                >
                  <div
                    className="gap-x-[18px] gap-y-[18px] grid grid-cols-[____266.50px_266.50px_266.50px_266.50px] grid-rows-[_582px] relative shrink-0 w-full"
                    data-node-id="233:4013"
                    data-name="Container"
                  >
                    <div
                      className="col-1 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:4014"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:4015"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:4016"
                          data-name="Image (01. High-Speed Loading)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage01HighSpeedLoading}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:4017"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:4018"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:4019"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:4020"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:4021"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:4022"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:4023"
                        >
                          01. High-Speed Loading
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:4024"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:4025"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:4026"
                          data-name="Image (02. Verify Shipment)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage02VerifyShipment}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:4027"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:4028"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:4029"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:4030"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:4031"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:4032"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:4033"
                        >
                          02. Verify Shipment
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-3 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:4034"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:4035"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:4036"
                          data-name="Image (03. Hold-to-Close Action)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage03HoldToCloseAction}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:4037"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:4038"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:4039"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:4040"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:4041"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:4042"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:4043"
                        >
                          03. Hold-to-Close Action
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-4 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-stretch shrink-0"
                      data-node-id="233:4044"
                      data-name="Figure"
                    >
                      <div
                        className="bg-[#101820] border-7 border-[#111827] border-solid content-stretch drop-shadow-[0px_26px_27.5px_rgba(15,23,42,0.2),0px_5px_7px_rgba(15,23,42,0.12)] flex flex-col h-[550px] items-start pt-[19px] relative rounded-[25px] shrink-0 w-[250px]"
                        data-node-id="233:4045"
                        data-name="Container"
                      >
                        <div
                          className="flex-[517_0_0] min-h-px relative rounded-bl-[16px] rounded-br-[16px] w-[236px]"
                          data-node-id="233:4046"
                          data-name="Image (04. Route Guard Block)"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] size-full"
                            src={imgImage04RouteGuardBlock}
                          />
                        </div>
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[-10px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:4047"
                          data-name="Text"
                        />
                        <div
                          className="absolute bg-[#334155] h-[70px] left-[241px] rounded-[4px] top-[80.4px] w-[5px]"
                          data-node-id="233:4048"
                          data-name="Text"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] h-[19px] items-center justify-center left-0 top-0 w-[236px]"
                          data-node-id="233:4049"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#475569] h-[3px] relative rounded-[3px] shrink-0 w-[33px]"
                            data-node-id="233:4050"
                            data-name="Italic Text"
                          />
                          <div
                            className="bg-[#263d47] relative rounded-[2px] shrink-0 size-[4px]"
                            data-node-id="233:4051"
                            data-name="Bold Text"
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0"
                        data-node-id="233:4052"
                        data-name="Figcaption:margin"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Medium'] font-[550] leading-[20px] relative shrink-0 text-[#0f172a] text-[13px] text-center whitespace-nowrap"
                          data-node-id="233:4053"
                        >
                          04. Route Guard Block
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full"
                data-node-id="233:4054"
              >
                <div
                  className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col items-start px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-full"
                  data-node-id="233:4055"
                  data-name="Article"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                    data-node-id="233:4056"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:4057"
                    >
                      03
                    </p>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="233:4058"
                      data-name="Text"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#475569] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                        data-node-id="233:4059"
                      >
                        Interaction Decision
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-[492px]"
                    data-node-id="233:4060"
                    data-name="Heading 4"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] whitespace-nowrap"
                      data-node-id="233:4061"
                    >{`Separating Loading From Shipment Closure `}</p>
                  </div>
                  <div
                    className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[10px] items-start leading-[22px] pt-[15px] relative shrink-0 text-[#64748b] text-[14px] w-full"
                    data-node-id="233:4062"
                    data-name="Paragraph"
                  >
                    <p className="relative shrink-0 w-full" data-node-id="233:4063">
                      Pallet scanning is a repeated operational action, so the interface keeps the
                      scanning and progress-tracking sequence straightforward.
                    </p>
                    <p className="relative shrink-0 w-full" data-node-id="233:4064">
                      Truck closure is a separate, consequential action. The press-and-hold
                      interaction introduces a deliberate confirmation step before the operation is
                      completed.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-[#eff6ff] border border-[#2563eb] border-solid content-stretch flex flex-col items-start px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-full"
                  data-node-id="233:4065"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                    data-node-id="233:4066"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap"
                      data-node-id="233:4067"
                    >
                      05
                    </p>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="233:4068"
                      data-name="Text"
                    >
                      <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*0)]">
                        <span className="leading-[18px] text-[12px]">Validation and Recovery</span>
                      </li>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[16px] items-start pt-[21px] relative shrink-0 w-[1062px]"
                    data-node-id="233:4070"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#dbeafe] grid grid-cols-[_42px] grid-rows-[_42px] relative rounded-[10px] shrink-0 size-[42px]"
                      data-node-id="233:4071"
                      data-name="Text"
                    >
                      <div
                        className="col-1 justify-self-center relative row-1 self-center shrink-0 size-[24px]"
                        data-node-id="233:4072"
                        data-name="image 26 [Vectorized]"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgImage26Vectorized}
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-[960px]"
                      data-node-id="233:4077"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="233:4078"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] whitespace-nowrap"
                          data-node-id="233:4079"
                        >
                          Checking Pallet-to-dock Assignments
                        </p>
                      </div>
                      <div
                        className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[10px] items-start leading-[22px] max-w-[960px] pt-[15px] relative shrink-0 text-[#475569] text-[14px] w-[960px]"
                        data-node-id="233:4080"
                        data-name="Paragraph"
                      >
                        <p className="relative shrink-0 w-[960px]" data-node-id="233:4081">
                          A pallet scanned during loading must belong to the shipment being
                          prepared.
                        </p>
                        <p
                          className="relative shrink-0 w-[960px]"
                          data-node-id="233:4082"
                        >{`When an LPN is assigned to another dock, the interface identifies both the pallet's assigned destination and the current dock. It prevents the incorrect assignment from proceeding and offers clear recovery actions.`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:4083"
            data-name="Section"
          >
            <div
              className="content-stretch flex flex-col items-start pb-[80px] pt-[20px] relative shrink-0 w-[1120px]"
              data-node-id="233:4084"
              data-name="Container"
            >
              <div
                className="bg-[#e2e8f0] h-px relative shrink-0 w-full"
                data-node-id="233:4085"
                data-name="Container"
              />
              <div
                className="content-stretch flex flex-col h-[76px] items-start pt-[34px] relative shrink-0 w-[1120px]"
                data-node-id="233:4086"
                data-name="Heading 2"
              >
                <p
                  className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[42px] relative shrink-0 text-[#0f172a] text-[32px] tracking-[-0.64px] whitespace-nowrap"
                  data-node-id="233:4087"
                >
                  Shared Interaction Patterns Across Workflows
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular'] font-normal gap-[15px] items-start leading-[24px] pt-[20px] relative shrink-0 text-[#475569] text-[16px] w-full"
                data-node-id="233:4088"
                data-name="Paragraph:margin"
              >
                <p className="relative shrink-0 w-full" data-node-id="233:4089">
                  Although the three workflows support different warehouse operations, they share a
                  set of interaction principles that help operators understand system responses,
                  identify issues and move through tasks consistently.
                </p>
                <p className="relative shrink-0 w-full" data-node-id="233:4090">
                  Rather than treating each screen as an isolated design, I applied recurring
                  patterns for barcode scanning, validation, error communication and recovery.
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[36px] relative shrink-0 w-full"
                data-node-id="233:4091"
                data-name="Container:margin"
              >
                <div
                  className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__552px_552px] grid-rows-[__200px_200px] relative shrink-0 w-full"
                  data-node-id="233:4092"
                  data-name="Container"
                >
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch min-h-[200px] px-[28px] py-[24px] relative rounded-[10px] row-1 self-stretch shrink-0"
                    data-node-id="233:4093"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[10px] h-[16.5px] items-center relative shrink-0 w-full"
                      data-node-id="233:4094"
                      data-name="Text"
                    >
                      <div
                        className="bg-[#3b82f6] relative rounded-[4px] shrink-0 size-[8px]"
                        data-node-id="233:4095"
                        data-name="Italic Text"
                      />
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[16.5px] relative shrink-0 text-[#475569] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap"
                        data-node-id="233:4096"
                      >
                        Scan-First Template
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col h-[42px] items-start pt-[16px] relative shrink-0 w-[494px]"
                      data-node-id="233:4097"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#0f172a] text-[19px] whitespace-nowrap"
                        data-node-id="233:4098"
                      >
                        Reducing Manual Input During Warehouse Operations
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
                      data-node-id="233:4099"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[21px] relative shrink-0 text-[#64748b] text-[14px] w-[494px]"
                        data-node-id="233:4100"
                      >
                        Barcode scanning is a recurring interaction across the workflows. Instead of
                        asking operators to manually enter identifiers, the interfaces use scanning
                        as the primary way to capture material, pallet and serial information.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch min-h-[200px] px-[28px] py-[24px] relative rounded-[10px] row-1 self-stretch shrink-0"
                    data-node-id="233:4101"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[10px] h-[16.5px] items-center relative shrink-0 w-full"
                      data-node-id="233:4102"
                      data-name="Text"
                    >
                      <div
                        className="bg-[#ef4444] relative rounded-[4px] shrink-0 size-[8px]"
                        data-node-id="233:4103"
                        data-name="Italic Text"
                      />
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[16.5px] relative shrink-0 text-[#475569] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap"
                        data-node-id="233:4104"
                      >
                        Clear Vaidation States
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[494px]"
                      data-node-id="233:4105"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#0f172a] text-[19px] w-full"
                        data-node-id="233:4106"
                      >
                        Distinguishing successful actions from blocked operations
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
                      data-node-id="233:4107"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[21px] relative shrink-0 text-[#64748b] text-[14px] w-[494px]"
                        data-node-id="233:4108"
                      >
                        A successful scan does not always mean the scanned item is valid for the
                        current operation. The application needs to communicate the difference
                        between barcode capture and business-rule validation.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch min-h-[200px] px-[28px] py-[24px] relative rounded-[10px] row-2 self-stretch shrink-0"
                    data-node-id="233:4109"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[10px] h-[16.5px] items-center relative shrink-0 w-full"
                      data-node-id="233:4110"
                      data-name="Text"
                    >
                      <div
                        className="bg-[#f59e0b] relative rounded-[4px] shrink-0 size-[8px]"
                        data-node-id="233:4111"
                        data-name="Italic Text"
                      />
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[16.5px] relative shrink-0 text-[#475569] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap"
                        data-node-id="233:4112"
                      >{`Prevention & Recovery`}</p>
                    </div>
                    <div
                      className="content-stretch flex flex-col h-[42px] items-start pt-[16px] relative shrink-0 w-[494px]"
                      data-node-id="233:4113"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#0f172a] text-[19px] whitespace-nowrap"
                        data-node-id="233:4114"
                      >
                        Making operational Errors Visible And Actionable
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
                      data-node-id="233:4115"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[21px] relative shrink-0 text-[#64748b] text-[14px] w-[494px]"
                        data-node-id="233:4116"
                      >
                        When an operation encounters a validation issue, the interface should
                        explain what went wrong and provide an appropriate next step wherever the
                        workflow supports one.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch min-h-[200px] px-[28px] py-[24px] relative rounded-[10px] row-2 self-stretch shrink-0"
                    data-node-id="233:4117"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[10px] h-[16.5px] items-center relative shrink-0 w-full"
                      data-node-id="233:4118"
                      data-name="Text"
                    >
                      <div
                        className="bg-[#22c55e] relative rounded-[4px] shrink-0 size-[8px]"
                        data-node-id="233:4119"
                        data-name="Italic Text"
                      />
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[16.5px] relative shrink-0 text-[#475569] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap"
                        data-node-id="233:4120"
                      >
                        Consistent Visual Severity
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[494px]"
                      data-node-id="233:4121"
                      data-name="Heading 3"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[26px] relative shrink-0 text-[#0f172a] text-[19px] w-full"
                        data-node-id="233:4122"
                      >
                        Using Visual Hierarchy to Communicate Operational Status
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
                      data-node-id="233:4123"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[21px] relative shrink-0 text-[#64748b] text-[14px] w-[494px]"
                        data-node-id="233:4124"
                      >
                        Status colours and visual treatments help operators distinguish between
                        different system responses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:4125"
            data-name="Section"
          >
            <div
              className="content-stretch flex flex-col items-start pb-[80px] pt-[20px] relative shrink-0 w-[1120px]"
              data-node-id="233:4126"
              data-name="Container"
            >
              <div
                className="bg-[#e2e8f0] h-px relative shrink-0 w-full"
                data-node-id="233:4127"
                data-name="Container"
              />
              <div
                className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full"
                data-node-id="233:4128"
                data-name="Container:margin"
              >
                <div
                  className="[word-break:break-word] font-['Geist:SemiBold'] h-[18px] relative shrink-0 uppercase w-full whitespace-nowrap"
                  data-node-id="233:4129"
                  data-name="Container"
                >
                  <p
                    className="absolute font-[650] leading-[18px] left-0 text-[#2563eb] text-[14px] top-0 tracking-[2.8px]"
                    data-node-id="233:4130"
                  >
                    SYSTEM SCOPE
                  </p>
                  <p
                    className="absolute font-semibold leading-[16px] left-[155.08px] text-[#475569] text-[12px] top-[2px] tracking-[1.5px]"
                    data-node-id="233:4131"
                  >
                    The Other 5 Designed Workflows
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full"
                data-node-id="233:4132"
                data-name="Container:margin"
              >
                <div
                  className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____214.40px_214.40px_214.40px_214.40px_214.40px] grid-rows-[_160px] relative shrink-0 w-full"
                  data-node-id="233:4133"
                  data-name="Container"
                >
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch min-h-[160px] p-[20px] relative rounded-[12px] row-1 self-stretch shrink-0"
                    data-node-id="233:4134"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="233:4135"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#0d9488] relative rounded-[3px] shrink-0 size-[6px]"
                        data-node-id="233:4136"
                        data-name="Italic Text"
                      />
                      <div
                        className="content-stretch flex flex-col h-[20px] items-start overflow-clip relative shrink-0 w-[129.938px]"
                        data-node-id="233:4137"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap"
                          data-node-id="233:4138"
                        >
                          Component Reintro
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[172.398px]"
                      data-node-id="233:4139"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[173px]"
                        data-node-id="233:4140"
                      >
                        Reintroducing quarantined assembly pieces into raw stock bins.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch min-h-[160px] p-[20px] relative rounded-[12px] row-1 self-stretch shrink-0"
                    data-node-id="233:4141"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="233:4142"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#0d9488] relative rounded-[3px] shrink-0 size-[6px]"
                        data-node-id="233:4143"
                        data-name="Italic Text"
                      />
                      <div
                        className="content-stretch flex flex-col h-[20px] items-start overflow-clip relative shrink-0 w-[132.555px]"
                        data-node-id="233:4144"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap"
                          data-node-id="233:4145"
                        >
                          Move to Warehouse
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[172.398px]"
                      data-node-id="233:4146"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[173px]"
                        data-node-id="233:4147"
                      >
                        Direct storage relocations from docking bays to long-term holds.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch min-h-[160px] p-[20px] relative rounded-[12px] row-1 self-stretch shrink-0"
                    data-node-id="233:4148"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="233:4149"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#0d9488] relative rounded-[3px] shrink-0 size-[6px]"
                        data-node-id="233:4150"
                        data-name="Italic Text"
                      />
                      <div
                        className="content-stretch flex flex-col h-[20px] items-start overflow-clip relative shrink-0 w-[116.586px]"
                        data-node-id="233:4151"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap"
                          data-node-id="233:4152"
                        >
                          Close the Picking
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[172.398px]"
                      data-node-id="233:4153"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[173px]"
                        data-node-id="233:4154"
                      >
                        Closing out dispatch waves to verify pallet completeness.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-4 content-stretch flex flex-col items-start justify-self-stretch min-h-[160px] p-[20px] relative rounded-[12px] row-1 self-stretch shrink-0"
                    data-node-id="233:4155"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="233:4156"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#0d9488] relative rounded-[3px] shrink-0 size-[6px]"
                        data-node-id="233:4157"
                        data-name="Italic Text"
                      />
                      <div
                        className="content-stretch flex flex-col h-[20px] items-start overflow-clip relative shrink-0 w-[108.516px]"
                        data-node-id="233:4158"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap"
                          data-node-id="233:4159"
                        >
                          Transfer Picking
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[172.398px]"
                      data-node-id="233:4160"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[173px]"
                        data-node-id="233:4161"
                      >
                        Direct inter-station relocations with active barcode routing.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-5 content-stretch flex flex-col items-start justify-self-stretch min-h-[160px] p-[20px] relative rounded-[12px] row-1 self-stretch shrink-0"
                    data-node-id="233:4162"
                    data-name="Article"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="233:4163"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#0d9488] relative rounded-[3px] shrink-0 size-[6px]"
                        data-node-id="233:4164"
                        data-name="Italic Text"
                      />
                      <div
                        className="content-stretch flex flex-col h-[20px] items-start overflow-clip relative shrink-0 w-[79.109px]"
                        data-node-id="233:4165"
                        data-name="Heading 3"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap"
                          data-node-id="233:4166"
                        >
                          Quick Move
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[172.398px]"
                      data-node-id="233:4167"
                      data-name="Paragraph"
                    >
                      <p
                        className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[173px]"
                        data-node-id="233:4168"
                      >
                        Instant one-scan relocation for rapid line adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[1512px]"
            data-node-id="233:4169"
            data-name="06 — Extending the design system with variables and tokens"
          >
            <div
              className="content-stretch flex flex-col gap-[36px] items-start overflow-clip pb-[80px] pt-[64px] relative shrink-0 w-[1120px]"
              data-node-id="233:4170"
              data-name="06 — Extending the design system with variables and tokens — reading column"
            >
              <div
                className="bg-[#e2e8f0] h-px relative shrink-0 w-[1120px]"
                data-node-id="233:4171"
                data-name="Section divider"
              />
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4172"
                data-name="Design-system introduction"
              >
                <div
                  className="content-stretch flex font-['Geist:SemiBold'] font-[650] gap-[14px] items-start leading-[42px] overflow-clip relative shrink-0 text-[32px] tracking-[-0.64px] w-[1120px]"
                  data-node-id="233:4173"
                  data-name="Section heading"
                >
                  <p className="relative shrink-0 text-[#2563eb] w-[43px]" data-node-id="233:4174">
                    06
                  </p>
                  <p
                    className="relative shrink-0 text-[#0f172a] w-[1063px]"
                    data-node-id="233:4175"
                  >
                    Extending the design system with variables and tokens
                  </p>
                </div>
                <p
                  className="font-['Geist:SemiBold'] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#475569] text-[17px] w-[min-content]"
                  data-node-id="233:4176"
                >
                  Making an existing design system easier to maintain
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#64748b] text-[15px] w-[min-content]"
                  data-node-id="233:4177"
                >
                  The project already had an established design system with reusable visual styles.
                  However, these styles were not organised using Figma variables.
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#64748b] text-[15px] w-[min-content]"
                  data-node-id="233:4178"
                >
                  As the design system was used across multiple screens and workflows, managing and
                  updating visual properties through individual styles could become cumbersome.
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#64748b] text-[15px] w-[min-content]"
                  data-node-id="233:4179"
                >
                  I introduced reusable Figma variables across the wider design system, covering
                  colours, spacing, typography, border radius and visual effects such as shadows.
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4180"
                data-name="01 — Identifying the opportunity"
              >
                <p
                  className="font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-full"
                  data-node-id="233:4181"
                >
                  01 — Identifying the opportunity
                </p>
                <p
                  className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                  data-node-id="233:4182"
                >
                  Moving from individually managed styles to reusable variables
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4183"
                >
                  The existing design system provided a visual foundation for the product, but its
                  styling properties were not yet structured as reusable variables in Figma.
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4184"
                >
                  I saw an opportunity to make these properties easier to manage by introducing
                  variables for commonly used design values.
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4185"
                data-name="Extending the system"
              >
                <p
                  className="font-['Geist:SemiBold'] font-[650] leading-[18px] min-w-full relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-[min-content]"
                  data-node-id="233:4186"
                >
                  02 — Extending the system
                </p>
                <p
                  className="font-['Geist:SemiBold'] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#0f172a] text-[17px] w-[min-content]"
                  data-node-id="233:4187"
                >
                  Introducing variables across key design properties
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#475569] text-[15px] w-[min-content]"
                  data-node-id="233:4188"
                >
                  I organised reusable variables around the following properties:
                </p>
                <div
                  className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                  data-node-id="233:4189"
                  data-name="Colour and spacing variables"
                >
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[552px]"
                    data-node-id="233:4190"
                    data-name="Colour variables"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4191"
                    >
                      Colour
                    </p>
                    <div
                      className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0 text-[#64748b] text-[15px] w-full"
                      data-node-id="233:4192"
                    >
                      <p className="leading-[23px] mb-0">• Primary and secondary colours</p>
                      <p className="leading-[23px] mb-0">• Background and surface colours</p>
                      <p className="leading-[23px] mb-0">• Text and icon colours</p>
                      <p className="leading-[23px]">• Status and feedback colours</p>
                    </div>
                  </div>
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[552px]"
                    data-node-id="233:4193"
                    data-name="Spacing variables"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4194"
                    >
                      Spacing
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#64748b] text-[15px] w-full"
                      data-node-id="233:4195"
                    >
                      Consistent spacing values used across layouts and components.
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#64748b] text-[15px] w-full"
                      data-node-id="233:4196"
                    >
                      Reusable values for padding and gaps.
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                  data-node-id="233:4197"
                  data-name="Typography radius and effects"
                >
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[362.667px]"
                    data-node-id="233:4198"
                    data-name="Typography"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4199"
                    >
                      Typography
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#64748b] text-[15px] w-full"
                      data-node-id="233:4200"
                    >
                      Reusable text-related values supporting the existing typography system.
                    </p>
                  </div>
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[362.667px]"
                    data-node-id="233:4201"
                    data-name="Border radius"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4202"
                    >
                      Border radius
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#64748b] text-[15px] w-full"
                      data-node-id="233:4203"
                    >
                      Reusable corner-radius values for interface elements and components.
                    </p>
                  </div>
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[362.667px]"
                    data-node-id="233:4204"
                    data-name="Effects"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4205"
                    >
                      Effects
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#64748b] text-[15px] w-full"
                      data-node-id="233:4206"
                    >
                      Reusable shadow and visual-effect values used across the interface.
                    </p>
                  </div>
                </div>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#475569] text-[15px] w-[min-content]"
                  data-node-id="233:4207"
                >
                  These variables extended the existing system rather than replacing its established
                  visual language.
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4208"
                data-name="03 — What changed"
              >
                <p
                  className="font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-full"
                  data-node-id="233:4209"
                >
                  03 — What changed
                </p>
                <p
                  className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                  data-node-id="233:4210"
                >
                  Improving consistency and maintainability
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4211"
                >
                  With commonly used design values organised as variables, updates could be managed
                  centrally rather than requiring individual changes across multiple elements.
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4212"
                >
                  This provided a more maintainable foundation for:
                </p>
                <div
                  className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4213"
                >
                  <p className="leading-[23px] mb-0">
                    • Reusing consistent values across screens and components.
                  </p>
                  <p className="leading-[23px] mb-0">
                    • Updating shared visual properties more efficiently.
                  </p>
                  <p className="leading-[23px] mb-0">
                    • Reducing inconsistencies caused by independently managed values.
                  </p>
                  <p className="leading-[23px]">
                    • Supporting future design changes as the product evolved.
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4214"
                data-name="Evidence from the Figma file"
              >
                <p
                  className="[word-break:break-word] font-['Geist:SemiBold'] font-[650] leading-[18px] min-w-full relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-[min-content]"
                  data-node-id="233:4215"
                >
                  04 — Evidence from the Figma file
                </p>
                <p
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#475569] text-[15px] w-[min-content]"
                  data-node-id="233:4216"
                >
                  The screenshots below show how the variables were introduced into the existing
                  design system:
                </p>
                <div
                  className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[#475569] text-[15px] w-[min-content]"
                  data-node-id="233:4217"
                >
                  <p className="leading-[23px] mb-0">• Colour variable collections.</p>
                  <p className="leading-[23px] mb-0">• Spacing variables.</p>
                  <p className="leading-[23px] mb-0">• Typography-related styles and variables.</p>
                  <p className="leading-[23px] mb-0">• Border-radius and effect variables.</p>
                  <p className="leading-[23px]">• Existing components using the reusable values.</p>
                </div>
                <div
                  className="h-[638.014px] relative rounded-[10px] shrink-0 w-[1120px]"
                  data-node-id="233:4218"
                  data-name="Figma variable collections — original evidence"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full"
                    src={imgFigmaVariableCollectionsOriginalEvidence}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[1512px]"
            data-node-id="233:4219"
            data-name="07 — Collaboration and implementation"
          >
            <div
              className="content-stretch flex flex-col gap-[36px] items-start overflow-clip pb-[80px] pt-[64px] relative shrink-0 w-[1120px]"
              data-node-id="233:4220"
              data-name="07 — Collaboration and implementation — reading column"
            >
              <div
                className="bg-[#e2e8f0] h-px relative shrink-0 w-[1120px]"
                data-node-id="233:4221"
                data-name="Section divider"
              />
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4222"
                data-name="Section introduction"
              >
                <div
                  className="content-stretch flex font-['Geist:SemiBold'] font-[650] gap-[14px] items-start leading-[42px] overflow-clip relative shrink-0 text-[32px] tracking-[-0.64px] w-[1120px]"
                  data-node-id="233:4223"
                  data-name="Section heading"
                >
                  <p className="relative shrink-0 text-[#2563eb] w-[43px]" data-node-id="233:4224">
                    07
                  </p>
                  <p
                    className="flex-[1_0_0] min-w-px relative text-[#0f172a]"
                    data-node-id="233:4225"
                  >
                    Collaboration and implementation
                  </p>
                </div>
                <p
                  className="font-['Geist:SemiBold'] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#475569] text-[17px] w-[min-content]"
                  data-node-id="233:4226"
                >
                  Taking designs beyond the Figma file
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#64748b] text-[15px] w-[min-content]"
                  data-node-id="233:4227"
                >
                  The work involved ongoing collaboration with client stakeholders and developers to
                  translate documented operational requirements into working interfaces.
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#64748b] text-[15px] w-[min-content]"
                  data-node-id="233:4228"
                >
                  Since the project was already underway when I joined, I worked within its
                  established workflows and design system, clarifying expectations with stakeholders
                  and refining the interfaces for implementation.
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4229"
                data-name="Stakeholder and developer collaboration"
              >
                <div
                  className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[552px]"
                  data-node-id="233:4230"
                  data-name="01 — Working with stakeholders"
                >
                  <p
                    className="font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-full"
                    data-node-id="233:4231"
                  >
                    01 — Working with stakeholders
                  </p>
                  <p
                    className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                    data-node-id="233:4232"
                  >
                    Clarifying operational expectations
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                    data-node-id="233:4233"
                  >
                    I worked directly with client stakeholders to understand how the application was
                    expected to support warehouse operations.
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                    data-node-id="233:4234"
                  >
                    These discussions helped clarify workflow expectations, required information,
                    validation scenarios and the intended behaviour of individual screens.
                  </p>
                </div>
                <div
                  className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[552px]"
                  data-node-id="233:4235"
                  data-name="02 — Working with developers"
                >
                  <p
                    className="font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-full"
                    data-node-id="233:4236"
                  >
                    02 — Working with developers
                  </p>
                  <p
                    className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                    data-node-id="233:4237"
                  >
                    Aligning interface behaviour with implementation
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                    data-node-id="233:4238"
                  >
                    I collaborated with developers to discuss the designed interfaces and their
                    expected interactions.
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                    data-node-id="233:4239"
                  >
                    This included communicating screen states, scanning interactions, validation
                    behaviour and the information that needed to be presented during each workflow.
                  </p>
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4240"
                data-name="03 — From design to implementation"
              >
                <p
                  className="font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-full"
                  data-node-id="233:4241"
                >
                  03 — From design to implementation
                </p>
                <p
                  className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                  data-node-id="233:4242"
                >
                  Delivering screens that moved into the client product
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4243"
                >
                  The screens I designed for the assigned workflows were implemented in the client
                  application.
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4244"
                >
                  This extended across the operational interfaces, including Kanban replenishment,
                  truck dispatch and preserial stock creation.
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4245"
                >
                  The final implemented interfaces demonstrate how the design work translated from
                  Figma into the product.
                </p>
              </div>
              <div
                className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4246"
                data-name="Client feedback — implementation evidence"
              >
                <div
                  className="h-[719.012px] relative rounded-[10px] shrink-0 w-[1120px]"
                  data-node-id="233:4247"
                  data-name="Client collaboration feedback — original evidence"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full"
                    src={imgClientCollaborationFeedbackOriginalEvidence}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[1512px]"
            data-node-id="233:4248"
            data-name="08 — Outcome and reflection"
          >
            <div
              className="content-stretch flex flex-col gap-[36px] items-start overflow-clip pb-[80px] pt-[64px] relative shrink-0 w-[1120px]"
              data-node-id="233:4249"
              data-name="08 — Outcome and reflection — reading column"
            >
              <div
                className="bg-[#e2e8f0] h-px relative shrink-0 w-[1120px]"
                data-node-id="233:4250"
                data-name="Section divider"
              />
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4251"
                data-name="Section introduction"
              >
                <div
                  className="content-stretch flex font-['Geist:SemiBold'] font-[650] gap-[14px] items-start leading-[42px] overflow-clip relative shrink-0 text-[32px] tracking-[-0.64px] w-[1120px]"
                  data-node-id="233:4252"
                  data-name="Section heading"
                >
                  <p className="relative shrink-0 text-[#2563eb] w-[43px]" data-node-id="233:4253">
                    08
                  </p>
                  <p
                    className="flex-[1_0_0] min-w-px relative text-[#0f172a]"
                    data-node-id="233:4254"
                  >
                    Outcome and reflection
                  </p>
                </div>
                <p
                  className="font-['Geist:SemiBold'] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#475569] text-[17px] w-[min-content]"
                  data-node-id="233:4255"
                >
                  Delivering operational interfaces within an established product
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#64748b] text-[15px] w-[min-content]"
                  data-node-id="233:4256"
                >
                  The project gave me the opportunity to contribute to an ongoing enterprise
                  product, working across multiple warehouse operations and taking assigned
                  workflows from interface design through implementation.
                </p>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4257"
                data-name="Delivery outcomes"
              >
                <p
                  className="font-['Geist:SemiBold'] font-[650] leading-[18px] min-w-full relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-[min-content]"
                  data-node-id="233:4258"
                >
                  01 — Delivery outcomes
                </p>
                <div
                  className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                  data-node-id="233:4259"
                  data-name="Delivery outcome cards"
                >
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[552px]"
                    data-node-id="233:4260"
                    data-name="Designed operational workflows"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4261"
                    >
                      Designed operational workflows
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                      data-node-id="233:4262"
                    >
                      Designed interfaces across assigned warehouse workflows, including Kanban
                      replenishment, Close Truck dispatch and Preserial Stock Creation.
                    </p>
                  </div>
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[552px]"
                    data-node-id="233:4263"
                    data-name="Implemented in the client product"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4264"
                    >
                      Implemented in the client product
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                      data-node-id="233:4265"
                    >{`The screens I designed were implemented as part of the client's warehouse management application.`}</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                  data-node-id="233:4266"
                  data-name="Delivery outcome cards"
                >
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[552px]"
                    data-node-id="233:4267"
                    data-name="Extended the existing design system"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4268"
                    >
                      Extended the existing design system
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                      data-node-id="233:4269"
                    >
                      Introduced reusable Figma variables across colours, spacing, typography,
                      border radius and visual effects, extending the existing design system and
                      making shared styles easier to maintain.
                    </p>
                  </div>
                  <div
                    className="bg-white border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[552px]"
                    data-node-id="233:4270"
                    data-name="Stakeholder and developer collaboration"
                  >
                    <p
                      className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                      data-node-id="233:4271"
                    >
                      Stakeholder and developer collaboration
                    </p>
                    <p
                      className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                      data-node-id="233:4272"
                    >
                      Worked directly with client stakeholders and developers to clarify
                      requirements and support the translation of designs into the implemented
                      product.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[1120px]"
                data-node-id="233:4273"
                data-name="02 — What I learned"
              >
                <p
                  className="font-['Geist:SemiBold'] font-[650] leading-[18px] min-w-full relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-[min-content]"
                  data-node-id="233:4274"
                >
                  02 — What I learned
                </p>
                <p
                  className="font-['Geist:SemiBold'] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#0f172a] text-[17px] w-[min-content]"
                  data-node-id="233:4275"
                >
                  Designing for operational environments requires more than visual clarity
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#475569] text-[15px] w-[min-content]"
                  data-node-id="233:4276"
                >
                  This project strengthened my understanding of the considerations involved in
                  designing interfaces for warehouse operations.
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] min-w-full relative shrink-0 text-[#475569] text-[15px] w-[min-content]"
                  data-node-id="233:4277"
                >
                  A few lessons stood out:
                </p>
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-[1120px]"
                  data-node-id="233:4278"
                  data-name="Understand the operation before designing the interface"
                >
                  <p
                    className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                    data-node-id="233:4279"
                  >
                    Understand the operation before designing the interface
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                    data-node-id="233:4280"
                  >
                    A warehouse workflow is shaped by physical tasks, operational rules and
                    dependencies. Understanding what the operator needs to accomplish is essential
                    before deciding how the interface should behave.
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-[1120px]"
                  data-node-id="233:4281"
                  data-name="Treat feedback and validation as part of the interaction"
                >
                  <p
                    className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                    data-node-id="233:4282"
                  >
                    Treat feedback and validation as part of the interaction
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                    data-node-id="233:4283"
                  >
                    In scan-driven workflows, confirming that a barcode was captured is different
                    from confirming that the operation was valid. Both device feedback and
                    application-level responses play important roles.
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-[1120px]"
                  data-node-id="233:4284"
                  data-name="Make exceptions understandable"
                >
                  <p
                    className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                    data-node-id="233:4285"
                  >
                    Make exceptions understandable
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                    data-node-id="233:4286"
                  >
                    An interface should not only support the expected path. It should also help
                    operators recognise why an action cannot proceed and understand what they can do
                    next.
                  </p>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[12px] relative shrink-0 w-[1120px]"
                  data-node-id="233:4287"
                  data-name="Think beyond individual screens"
                >
                  <p
                    className="font-['Geist:SemiBold'] font-semibold leading-[24px] relative shrink-0 text-[#0f172a] text-[17px] w-full"
                    data-node-id="233:4288"
                  >
                    Think beyond individual screens
                  </p>
                  <p
                    className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                    data-node-id="233:4289"
                  >
                    Consistent interaction patterns and reusable design values make it easier to
                    maintain and extend an interface across multiple workflows.
                  </p>
                </div>
              </div>
              <div
                className="[word-break:break-word] bg-[#eff6ff] border border-[#2563eb] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[10px] shrink-0 w-[1120px]"
                data-node-id="233:4290"
                data-name="Final reflection"
              >
                <p
                  className="font-['Geist:SemiBold'] font-[650] leading-[18px] relative shrink-0 text-[#2563eb] text-[12px] tracking-[0.96px] uppercase w-full"
                  data-node-id="233:4291"
                >
                  Final reflection
                </p>
                <p
                  className="font-['Geist:Regular'] font-normal leading-[23px] relative shrink-0 text-[#475569] text-[15px] w-full"
                  data-node-id="233:4292"
                >{`This experience reinforced an important part of my approach to enterprise UX: designing for operational clarity means understanding the task, communicating system behaviour and considering what happens when things don't go as expected.`}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white content-stretch flex flex-col h-[514px] items-start overflow-clip pt-[72px] relative shrink-0 w-full"
          data-node-id="233:4293"
          data-name="Footer"
        >
          <div
            className="content-stretch flex flex-col items-center relative shrink-0 w-full"
            data-node-id="233:4294"
            data-name="Container:margin"
          >
            <div
              className="content-stretch flex flex-col items-start max-w-[1280px] px-[80px] relative shrink-0 w-[1280px]"
              data-node-id="233:4295"
              data-name="Container"
            >
              <div
                className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                data-node-id="233:4296"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0"
                  data-node-id="233:4297"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex items-center relative shrink-0"
                    data-node-id="233:4298"
                    data-name="Link"
                  >
                    <div
                      className="h-[31.109px] relative shrink-0 w-[168px]"
                      data-node-id="233:4299"
                      data-name="Image (NivethUX)"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        src={imgImageNivethUx}
                      />
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="233:4300"
                    data-name="Heading 3"
                  >
                    <div
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[#1e293b] text-[22px] whitespace-nowrap"
                      data-node-id="233:4301"
                    >
                      <p className="leading-[30.8px] mb-0">{`Brand & UI/UX Designer`}</p>
                      <p className="leading-[30.8px]">based in Bangalore</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="233:4302"
                    data-name="Paragraph"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap"
                      data-node-id="233:4303"
                    >{`Hi, I'm Nivethitha — a UI/UX and brand designer passionate about creating seamless digital experiences that connect and convert.`}</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-[61.789px]"
                  data-node-id="233:4304"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="233:4305"
                    data-name="Container"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap"
                      data-node-id="233:4306"
                    >
                      Menu
                    </p>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[16px] h-[164px] items-start pt-[20px] relative shrink-0 w-[61.789px]"
                    data-node-id="233:4307"
                    data-name="List"
                  >
                    <div
                      className="h-[24px] relative shrink-0 w-full"
                      data-node-id="233:4308"
                      data-name="List Item"
                    >
                      <div
                        className="absolute content-stretch flex h-[20px] items-center left-0 top-[2.5px]"
                        data-node-id="233:4309"
                        data-name="Link"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap"
                          data-node-id="233:4310"
                        >
                          Home
                        </p>
                      </div>
                    </div>
                    <div
                      className="h-[24px] relative shrink-0 w-full"
                      data-node-id="233:4311"
                      data-name="List Item"
                    >
                      <div
                        className="absolute content-stretch flex h-[20px] items-center left-0 top-[2.5px]"
                        data-node-id="233:4312"
                        data-name="Link"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap"
                          data-node-id="233:4313"
                        >
                          Work
                        </p>
                      </div>
                    </div>
                    <div
                      className="h-[24px] relative shrink-0 w-full"
                      data-node-id="233:4314"
                      data-name="List Item"
                    >
                      <div
                        className="absolute content-stretch flex h-[20px] items-center left-0 top-[2.5px]"
                        data-node-id="233:4315"
                        data-name="Link"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap"
                          data-node-id="233:4316"
                        >
                          About Me
                        </p>
                      </div>
                    </div>
                    <div
                      className="h-[24px] relative shrink-0 w-full"
                      data-node-id="233:4317"
                      data-name="List Item"
                    >
                      <div
                        className="absolute content-stretch flex h-[20px] items-center left-0 top-[2.5px]"
                        data-node-id="233:4318"
                        data-name="Link"
                      >
                        <p
                          className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap"
                          data-node-id="233:4319"
                        >
                          Contact
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-[104.672px]"
                  data-node-id="233:4320"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="233:4321"
                    data-name="Container"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[20px] relative shrink-0 text-[#64748b] text-[13px] uppercase whitespace-nowrap"
                      data-node-id="233:4322"
                    >
                      SOCIAL
                    </p>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[16px] h-[206px] items-start pt-[20px] relative shrink-0 w-[104.672px]"
                    data-node-id="233:4323"
                    data-name="List"
                  >
                    <div
                      className="h-[34.5px] relative shrink-0 w-full"
                      data-node-id="233:4324"
                      data-name="List Item"
                    >
                      <div
                        className="absolute content-stretch flex gap-[12px] items-center left-0 top-0"
                        data-node-id="233:4325"
                        data-name="Link"
                      >
                        <div
                          className="relative shrink-0 size-[28px]"
                          data-node-id="233:4326"
                          data-name="Image"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                            src={imgImage}
                          />
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="233:4327"
                          data-name="Text"
                        >
                          <p
                            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap"
                            data-node-id="233:4328"
                          >
                            LinkedIn
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-[34.5px] relative shrink-0 w-full"
                      data-node-id="233:4329"
                      data-name="List Item"
                    >
                      <div
                        className="absolute content-stretch flex gap-[12px] items-center left-0 top-0"
                        data-node-id="233:4330"
                        data-name="Link"
                      >
                        <div
                          className="relative shrink-0 size-[28px]"
                          data-node-id="233:4331"
                          data-name="Image"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                            src={imgImage1}
                          />
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="233:4332"
                          data-name="Text"
                        >
                          <p
                            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap"
                            data-node-id="233:4333"
                          >
                            Instagram
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-[34.5px] relative shrink-0 w-full"
                      data-node-id="233:4334"
                      data-name="List Item"
                    >
                      <div
                        className="absolute content-stretch flex gap-[12px] items-center left-0 top-0"
                        data-node-id="233:4335"
                        data-name="Link"
                      >
                        <div
                          className="relative shrink-0 size-[28px]"
                          data-node-id="233:4336"
                          data-name="Image"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                            src={imgImage2}
                          />
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="233:4337"
                          data-name="Text"
                        >
                          <p
                            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap"
                            data-node-id="233:4338"
                          >
                            Behance
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-[34.5px] relative shrink-0 w-full"
                      data-node-id="233:4339"
                      data-name="List Item"
                    >
                      <div
                        className="absolute content-stretch flex gap-[12px] items-center left-0 top-0"
                        data-node-id="233:4340"
                        data-name="Link"
                      >
                        <div
                          className="relative shrink-0 size-[28px]"
                          data-node-id="233:4341"
                          data-name="Image"
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                            src={imgImage3}
                          />
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="233:4342"
                          data-name="Text"
                        >
                          <p
                            className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap"
                            data-node-id="233:4343"
                          >
                            Dribbble
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[56px] relative shrink-0 w-full"
                data-node-id="233:4344"
                data-name="Container:margin"
              >
                <div
                  className="content-stretch flex h-[160px] items-end justify-center overflow-clip relative shrink-0 w-[1120px]"
                  data-node-id="233:4345"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="233:4346"
                    data-name="Text"
                  >
                    <p
                      className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[184.8px] relative shrink-0 text-[#e2e8f0] text-[220px] tracking-[-11px] whitespace-nowrap"
                      data-node-id="233:4347"
                    >
                      NivethUX
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute content-stretch flex items-center left-[80px] pb-[32px] pt-[20px] top-[372px] w-[1120px]"
                data-node-id="233:4348"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="233:4349"
                  data-name="Text"
                >
                  <p
                    className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[18px] relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap"
                    data-node-id="233:4350"
                  >
                    © 2026 Nivethitha R B
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {preview && (
        <button
          className="image-preview"
          type="button"
          aria-label="Close image preview"
          onClick={(event) => {
            event.stopPropagation();
            setPreview(null);
          }}
        >
          <img src={preview} alt="Expanded case study evidence" />
          <span>Click anywhere to close</span>
        </button>
      )}
    </main>
  );
}
